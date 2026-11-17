import fs from "node:fs";
import path from "node:path";

/**
 * Галерея и документы собираются автоматически из папок проекта:
 *   public/media/gallery/kindergarten/*  → «Детский сад»
 *   public/media/gallery/groups/*        → «Группы»
 *   public/media/gallery/events/*        → «Мероприятия»
 *   public/media/gallery/*               → без категории
 *   public/media/documents/*.pdf         → карточки документов
 * Достаточно положить файлы и пересобрать сайт.
 */

export type GalleryCategory = "kindergarten" | "groups" | "events";
export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  category: GalleryCategory | null;
};
export type DocumentFile = { href: string; title: string; sizeKb: number };

const PUBLIC = path.join(process.cwd(), "public");
const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;
const categories: GalleryCategory[] = ["kindergarten", "groups", "events"];

function listFiles(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isFile() && !d.name.startsWith("."))
      .map((d) => d.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

/** Минимальное чтение размеров JPEG/PNG/WebP/GIF без внешних зависимостей. */
function imageSize(file: string): { width: number; height: number } | null {
  let buf: Buffer;
  try {
    buf = fs.readFileSync(file);
  } catch {
    return null;
  }
  // PNG
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  // GIF
  if (buf.toString("ascii", 0, 3) === "GIF") {
    return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
  }
  // WebP
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8X") return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
    if (chunk === "VP8 ") return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const b = buf.readUInt32LE(21);
      return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 };
    }
    return null;
  }
  // JPEG
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let off = 2;
    let orientation = 1;
    let size: { width: number; height: number } | null = null;
    while (off + 9 < buf.length) {
      if (buf[off] !== 0xff) { off++; continue; }
      const marker = buf[off + 1];
      const len = buf.readUInt16BE(off + 2);
      if (marker === 0xe1 && buf.toString("ascii", off + 4, off + 8) === "Exif") {
        orientation = exifOrientation(buf, off + 10) ?? 1;
      }
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        size = { height: buf.readUInt16BE(off + 5), width: buf.readUInt16BE(off + 7) };
        break;
      }
      off += 2 + len;
    }
    if (size && orientation >= 5) return { width: size.height, height: size.width };
    return size;
  }
  return null;
}

function exifOrientation(buf: Buffer, tiff: number): number | null {
  try {
    const le = buf.toString("ascii", tiff, tiff + 2) === "II";
    const u16 = (o: number) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
    const u32 = (o: number) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
    const ifd = tiff + u32(tiff + 4);
    const count = u16(ifd);
    for (let i = 0; i < count; i++) {
      const e = ifd + 2 + i * 12;
      if (u16(e) === 0x0112) return u16(e + 8);
    }
  } catch {
    /* ignore */
  }
  return null;
}

function toPhoto(rel: string, category: GalleryCategory | null): GalleryPhoto | null {
  const size = imageSize(path.join(PUBLIC, rel));
  if (!size || !size.width || !size.height) return null;
  return { src: "/" + rel.split(path.sep).map(encodeURIComponent).join("/"), ...size, category };
}

export function getGalleryPhotos(): GalleryPhoto[] {
  const base = path.join("media", "gallery");
  const photos: GalleryPhoto[] = [];
  for (const cat of categories) {
    for (const f of listFiles(path.join(PUBLIC, base, cat))) {
      if (!IMAGE_EXT.test(f)) continue;
      const p = toPhoto(path.join(base, cat, f), cat);
      if (p) photos.push(p);
    }
  }
  for (const f of listFiles(path.join(PUBLIC, base))) {
    if (!IMAGE_EXT.test(f)) continue;
    const p = toPhoto(path.join(base, f), null);
    if (p) photos.push(p);
  }
  return photos;
}

export function getDocuments(): DocumentFile[] {
  const dir = path.join(PUBLIC, "media", "documents");
  return listFiles(dir)
    .filter((f) => /\.pdf$/i.test(f))
    .map((f) => ({
      href: "/media/documents/" + encodeURIComponent(f),
      title: f.replace(/\.pdf$/i, "").replace(/[_-]+/g, " ").trim(),
      sizeKb: Math.max(1, Math.round(fs.statSync(path.join(dir, f)).size / 1024)),
    }));
}
