"use client";

import { useLang } from "../LangProvider";
import { site } from "@/lib/site";
import { Balloon, Cloud, Kite, Note, Pencil, Star } from "../Decor";
import { Reveal } from "../Reveal";
import { Heading, PhotoOr, Section } from "../ui";

function JuniorScene() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="200" fill="#DDF4FC" />
      <path d="M0 160c60-14 120-14 180 0s100 10 140 0v40H0Z" fill="#BFE8F7" />
      <g transform="translate(70 92)">
        <rect width="56" height="56" rx="10" fill="#FFD84D" />
        <text x="28" y="39" textAnchor="middle" fontSize="30" fontWeight="900" fill="#fff" fontFamily="system-ui">Ә</text>
      </g>
      <g transform="translate(130 92)">
        <rect width="56" height="56" rx="10" fill="#FFA65C" />
        <text x="28" y="39" textAnchor="middle" fontSize="30" fontWeight="900" fill="#fff" fontFamily="system-ui">Б</text>
      </g>
      <g transform="translate(100 38) rotate(-6)">
        <rect width="56" height="56" rx="10" fill="#9DDC82" />
        <text x="28" y="39" textAnchor="middle" fontSize="30" fontWeight="900" fill="#fff" fontFamily="system-ui">Ө</text>
      </g>
      {/* уточка */}
      <g transform="translate(206 96)">
        <ellipse cx="38" cy="38" rx="36" ry="22" fill="#FFD84D" />
        <circle cx="62" cy="14" r="16" fill="#FFD84D" />
        <path d="M76 14l14 4-14 5Z" fill="#FFA65C" />
        <circle cx="66" cy="10" r="3" fill="#2C2A4A" />
        <path d="M20 34c10 8 22 8 30 0" stroke="#F0BE1E" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>
      <circle cx="270" cy="40" r="16" fill="#fff" opacity=".8" />
      <circle cx="290" cy="46" r="12" fill="#fff" opacity=".8" />
    </svg>
  );
}

function SeniorScene() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="200" fill="#FFEBD9" />
      <path d="M0 150c70 16 140 16 210 0s80-10 110 0v50H0Z" fill="#FFD9B8" />
      {/* палитра */}
      <g transform="translate(46 50)">
        <path d="M60 0C26 0 0 22 0 50s24 46 50 46c10 0 12-8 8-14-4-8 2-14 10-14h18c18 0 34-10 34-30C120 16 94 0 60 0Z" fill="#fff" />
        <circle cx="30" cy="40" r="10" fill="#FF7A6B" />
        <circle cx="52" cy="22" r="10" fill="#FFD84D" />
        <circle cx="82" cy="24" r="10" fill="#8DDCF7" />
        <circle cx="96" cy="48" r="9" fill="#9DDC82" />
        <circle cx="32" cy="68" r="8" fill="#C7AEF4" />
      </g>
      {/* мяч */}
      <g transform="translate(200 84)">
        <circle cx="40" cy="40" r="40" fill="#C7AEF4" />
        <path d="M0 40h80M40 0c-16 24-16 56 0 80M40 0c16 24 16 56 0 80" stroke="#fff" strokeWidth="5" fill="none" />
      </g>
      <path d="M180 40l6 12 13 2-10 9 3 13-12-7-12 7 3-13-10-9 13-2Z" fill="#FFD84D" />
    </svg>
  );
}

const cards = [
  {
    key: "junior" as const,
    wrap: "bg-white ring-sky/70 rounded-[34px_34px_34px_12px]",
    age: "bg-sky text-ink",
    chip: "bg-sky-50 text-sky-deep ring-sky/50",
    scene: <JuniorScene />,
    deco: <Cloud className="absolute -right-3 -top-4 z-10 w-16 drop-shadow-sm sm:w-20" color="#E6F7FD" />,
  },
  {
    key: "senior" as const,
    wrap: "bg-white ring-peach/60 rounded-[12px_34px_34px_34px]",
    age: "bg-peach text-ink",
    chip: "bg-peach-50 text-peach-deep ring-peach/40",
    scene: <SeniorScene />,
    deco: <Star className="absolute -right-2 -top-3 z-10 w-9 sm:w-10" color="#FFD84D" spin />,
  },
];

export function Groups() {
  const { t } = useLang();
  return (
    <Section
      id="groups"
      bg="#F3EDFD"
      next="#FFF6D6"
      pad="pb-12 pt-9 sm:pb-14 sm:pt-12 lg:pb-14 lg:pt-12 short:lg:pt-8"
      decor={
        <>
          <Pencil className="absolute right-[6%] top-12 hidden w-28 rotate-[-18deg] md:block" color="#FFA65C" />
          <Pencil className="absolute -left-6 bottom-24 w-20 rotate-[24deg] sm:w-24" color="#8DDCF7" />
          <Note className="absolute left-[48%] top-16 hidden w-8 lg:block" color="#C7AEF4" />
          <Note className="absolute right-[3%] bottom-24 w-6 sm:w-8" color="#FFA65C" />
          <div className="anim-bob absolute left-[34%] bottom-10 hidden w-8 lg:block">
            <Balloon color="#9DDC82" />
          </div>
          <div className="anim-bob absolute right-[28%] top-6 hidden w-8 [animation-delay:-3s] lg:block">
            <Kite />
          </div>
        </>
      }
    >
      <Heading id="groups" kicker={t.groups.kicker} title={t.groups.title} lead={t.groups.lead} tint="lilac" compact />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-7 lg:gap-6 short:lg:mt-5">
        {cards.map((c, i) => {
          const g = t.groups.items[c.key];
          return (
            <Reveal as="article" key={c.key} delay={i * 100} className="group relative">
              <div
                className={`relative grid h-full gap-3 p-2.5 shadow-[0_16px_34px_-26px_rgba(44,42,74,.45)] ring-2 transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-3 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-4 ${c.wrap}`}
              >
                {c.deco}
                <div className="relative overflow-hidden rounded-[26px_26px_26px_10px]">
                  <PhotoOr
                    photo={site.groupPhotos[c.key]}
                    alt={g.name}
                    sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 92vw"
                    className="aspect-[16/7] sm:aspect-[16/8] lg:aspect-auto lg:h-full lg:min-h-[200px]"
                    fallback={c.scene}
                  />
                  {!site.groupPhotos[c.key] && (
                    <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-0.5 text-[10.5px] font-bold text-ink/60">
                      {t.groups.photoSoon}
                    </span>
                  )}
                  <span className={`absolute left-2.5 top-2.5 rounded-full px-3 py-1 text-sm font-black leading-tight shadow-md sm:text-[15px] ${c.age}`}>
                    <span className="sr-only">{t.groups.ageLabel}: </span>
                    {g.age}
                  </span>
                </div>
                <div className="px-1.5 pb-1.5 sm:px-2 lg:px-0 lg:py-1.5 lg:pr-2">
                  <h3 className="text-balance text-lg font-black leading-tight text-ink sm:text-xl">{g.name}</h3>
                  <p className="mt-1.5 text-[14px] leading-snug text-ink/70 sm:text-[14.5px]">{g.text}</p>
                  <p className="mt-2.5 text-[11.5px] font-extrabold text-ink/50">{t.groups.directionsLabel}</p>
                  <ul className="mt-1.5 flex flex-wrap gap-1.5">
                    {g.directions.map((d) => (
                      <li key={d} className={`rounded-full px-2.5 py-0.5 text-[12.5px] font-bold ring-1 ${c.chip}`}>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
