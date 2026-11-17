"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLang } from "../LangProvider";
import { site } from "@/lib/site";
import type { GalleryCategory, GalleryPhoto } from "@/lib/media";
import { Butterfly, Flower, Kite, Rainbow, Star } from "../Decor";
import { ChevronLeft, ChevronRight, CloseIcon, InstagramIcon, ZoomIcon } from "../Illustrations";
import { Reveal } from "../Reveal";
import { Heading, Section, btn } from "../ui";

const PAGE = 8;
const order: GalleryCategory[] = ["kindergarten", "groups", "events"];
type Filter = "all" | GalleryCategory;

export function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const [limit, setLimit] = useState(PAGE);
  const [index, setIndex] = useState<number | null>(null);

  const available = useMemo(() => order.filter((c) => photos.some((p) => p.category === c)), [photos]);
  const filtered = useMemo(() => (filter === "all" ? photos : photos.filter((p) => p.category === filter)), [photos, filter]);
  const shown = filtered.slice(0, limit);
  const alt = (i: number) => `${t.gallery.photo} ${i + 1}`;

  return (
    <Section
      id="gallery"
      bg="#FFFDF7"
      next="#ECF8E6"
      decor={
        <>
          <Rainbow className="absolute -right-10 top-8 w-32 opacity-50 sm:w-44" />
          <Butterfly className="anim-bob absolute left-[3%] top-14 w-10 sm:w-12" />
          <Flower className="absolute bottom-16 left-[48%] hidden w-9 lg:block" petal="#8DDCF7" />
          <Star className="absolute right-[30%] top-16 hidden w-5 md:block" color="#C7AEF4" spin />
          <div className="anim-bob absolute bottom-24 right-[3%] hidden w-8 lg:block">
            <Kite />
          </div>
        </>
      }
    >
      <Heading id="gallery" kicker={t.gallery.kicker} title={t.gallery.title} lead={t.gallery.lead} tint="peach" align="center" />

      {photos.length === 0 ? (
        <Reveal className="mx-auto mt-8 max-w-3xl text-center">
          <div aria-hidden className="mx-auto flex max-w-md justify-center">
            {["#FFD84D", "#8DDCF7", "#C7AEF4"].map((c, i) => (
              <div
                key={c}
                className="-mx-3 w-28 bg-white p-2 pb-6 shadow-[0_14px_30px_-18px_rgba(44,42,74,.5)] ring-1 ring-ink/5 sm:w-36"
                style={{ transform: `rotate(${(i - 1) * 7}deg) translateY(${i === 1 ? -6 : 4}px)`, zIndex: i === 1 ? 2 : 1 }}
              >
                <div className="relative grid aspect-square place-items-center overflow-hidden rounded-md" style={{ background: `${c}55` }}>
                  <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="#2C2A4A" strokeOpacity=".45" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="10" width="36" height="28" rx="6" />
                    <circle cx="18" cy="20" r="3.5" />
                    <path d="m8 34 10-9 8 7 6-5 8 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <h3 className="mt-7 text-lg font-black text-ink sm:text-xl">{t.gallery.emptyTitle}</h3>
          <p className="mx-auto mt-1.5 max-w-md text-[14.5px] leading-relaxed text-ink/65">{t.gallery.emptyText}</p>
          <a href={site.instagramReel} target="_blank" rel="noopener noreferrer" className={`${btn.secondary} mt-5`}>
            <InstagramIcon className="h-5 w-5" />
            {t.gallery.watchReel}
          </a>
        </Reveal>
      ) : (
        <>
          {available.length > 1 && (
            <div role="group" aria-label={t.gallery.kicker} className="mt-6 flex flex-wrap justify-center gap-2">
              {(["all", ...available] as Filter[]).map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => {
                    setFilter(f);
                    setLimit(PAGE);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-extrabold transition-all duration-200 ${
                    filter === f ? "bg-peach text-ink shadow-[0_4px_0_-1px_#E98A3C]" : "bg-white text-ink/70 ring-1 ring-ink/10 hover:ring-peach"
                  }`}
                >
                  {f === "all" ? t.gallery.all : t.gallery.categories[f]}
                </button>
              ))}
            </div>
          )}

          <ul className="mt-7 columns-1 gap-3 min-[360px]:columns-2 sm:gap-4 md:columns-3 xl:columns-4">
            {shown.map((p, i) => (
              <li key={p.src} className="mb-3 break-inside-avoid sm:mb-4">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${t.gallery.open}: ${alt(i)}`}
                  className="group relative block w-full overflow-hidden rounded-[22px] bg-sun-50 shadow-[0_10px_24px_-18px_rgba(44,42,74,.6)] ring-1 ring-ink/5 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-peach-deep"
                >
                  <Image
                    src={p.src}
                    alt={alt(i)}
                    width={p.width}
                    height={p.height}
                    loading="lazy"
                    quality={70}
                    sizes="(min-width: 1280px) 300px, (min-width: 768px) 33vw, (min-width: 360px) 50vw, 100vw"
                    className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15">
                    <span className="grid h-11 w-11 scale-75 place-items-center rounded-full bg-white/95 text-ink opacity-0 shadow transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <ZoomIcon />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {filtered.length > limit && (
            <div className="mt-4 text-center">
              <button type="button" onClick={() => setLimit((l) => l + PAGE)} className={btn.secondary}>
                {t.gallery.more}
              </button>
            </div>
          )}
        </>
      )}

      {index !== null && createPortal(<Lightbox photos={filtered} index={index} setIndex={setIndex} />, document.body)}
    </Section>
  );
}

function Lightbox({ photos, index, setIndex }: { photos: GalleryPhoto[]; index: number; setIndex: (i: number | null) => void }) {
  const { t } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touch = useRef<number | null>(null);
  const n = photos.length;
  const p = photos[index];

  const go = useCallback((d: number) => setIndex((index + d + n) % n), [index, n, setIndex]);
  const close = useCallback(() => setIndex(null), [setIndex]);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>("button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close, go]);

  if (!p) return null;
  const ctl =
    "grid h-12 w-12 place-items-center rounded-full bg-white text-ink shadow-lg ring-1 ring-ink/10 transition-transform duration-200 hover:scale-110 focus-visible:outline-3 focus-visible:outline-peach-deep";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${t.gallery.photo} ${index + 1} ${t.gallery.of} ${n}`}
      className="fixed inset-0 z-50 flex flex-col bg-[#FFFDF7]/97 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && close()}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touch.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <span className="rounded-full bg-sun px-3 py-1 text-sm font-black text-ink">
          {index + 1} {t.gallery.of} {n}
        </span>
        <button ref={closeRef} type="button" onClick={close} aria-label={t.gallery.close} className={ctl}>
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="relative min-h-0 flex-1 px-3 pb-4 sm:px-20 sm:pb-8" onClick={(e) => e.target === e.currentTarget && close()}>
        <div className="relative h-full w-full">
          <Image key={p.src} src={p.src} alt={`${t.gallery.photo} ${index + 1}`} fill sizes="100vw" quality={80} className="object-contain" />
        </div>
        {n > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label={t.gallery.prev} className={`${ctl} absolute left-3 top-1/2 -translate-y-1/2 hover:scale-110 sm:left-5`}>
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label={t.gallery.next} className={`${ctl} absolute right-3 top-1/2 -translate-y-1/2 sm:right-5`}>
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
