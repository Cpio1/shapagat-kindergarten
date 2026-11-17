import Image from "next/image";
import type { Photo } from "@/lib/site";
import { Wave } from "./Decor";
import { Reveal } from "./Reveal";

export function Section({
  id,
  bg,
  next,
  decor,
  className = "",
  children,
}: {
  id: string;
  bg: string;
  next?: string;
  decor?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative isolate overflow-hidden" style={{ background: bg }}>
      {decor && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {decor}
        </div>
      )}
      <div className={`mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16 ${className}`}>{children}</div>
      {next && (
        <div className="absolute inset-x-0 -bottom-px">
          <Wave color={next} />
        </div>
      )}
    </section>
  );
}

const kickerTint = {
  sun: "bg-sun/35 text-ink",
  sky: "bg-sky/40 text-ink",
  leaf: "bg-leaf/40 text-ink",
  peach: "bg-peach/35 text-ink",
  lilac: "bg-lilac/40 text-ink",
} as const;
const dotTint = { sun: "bg-sun-deep", sky: "bg-sky-deep", leaf: "bg-leaf-deep", peach: "bg-peach-deep", lilac: "bg-lilac-deep" } as const;

export type Tint = keyof typeof kickerTint;

export function Heading({
  id,
  kicker,
  title,
  lead,
  tint,
  align = "left",
  className = "",
}: {
  id: string;
  kicker: string;
  title: string;
  lead?: string;
  tint: Tint;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <p className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px] font-extrabold ${kickerTint[tint]}`}>
        <span className={`h-2 w-2 rounded-full ${dotTint[tint]}`} />
        {kicker}
      </p>
      <h2 id={`${id}-title`} className="mt-3 text-balance text-[28px] font-black leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
        {title}
      </h2>
      {lead && <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink/70 sm:text-base">{lead}</p>}
    </Reveal>
  );
}

export const btn = {
  primary:
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-peach px-6 py-3 text-[15px] font-extrabold text-ink shadow-[0_8px_0_-2px_#E98A3C] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_10px_0_-2px_#E98A3C] active:translate-y-0.5 active:shadow-[0_4px_0_-2px_#E98A3C] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-peach-deep",
  secondary:
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-extrabold text-ink ring-2 ring-ink/10 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:ring-sky focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-sky-deep",
  small:
    "inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-extrabold transition-all duration-200 ease-out hover:scale-[1.04] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink/40",
};

/** Фото, если оно задано в конфиге, иначе — иллюстрация-заглушка. */
export function PhotoOr({
  photo,
  alt,
  sizes,
  fallback,
  className = "",
  preload = false,
}: {
  photo: Photo | null;
  alt: string;
  sizes: string;
  fallback: React.ReactNode;
  className?: string;
  preload?: boolean;
}) {
  if (!photo) return <div className={`relative ${className}`}>{fallback}</div>;
  return (
    <div className={`relative ${className}`}>
      <Image src={photo.src} alt={alt} fill sizes={sizes} preload={preload} quality={80} className="object-cover" />
    </div>
  );
}
