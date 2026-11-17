"use client";

import { useLang } from "../LangProvider";
import { site } from "@/lib/site";
import { Blob, Butterfly, Flower, Leaf, Star } from "../Decor";
import { KindergartenScene } from "../Illustrations";
import { Reveal } from "../Reveal";
import { Heading, PhotoOr, Section } from "../ui";

const featureStyles = [
  { card: "bg-sky-50 ring-sky/60 rounded-[28px_28px_28px_8px]", icon: "bg-sky" },
  { card: "bg-sun-50 ring-sun/70 rounded-[8px_28px_28px_28px]", icon: "bg-sun" },
  { card: "bg-lilac-50 ring-lilac/60 rounded-[28px_8px_28px_28px]", icon: "bg-lilac" },
  { card: "bg-peach-50 ring-peach/50 rounded-[28px_28px_8px_28px]", icon: "bg-peach" },
];

function FeatureIcon({ i }: { i: number }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "#2C2A4A", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: "h-5 w-5", "aria-hidden": true };
  if (i === 0)
    return (
      <svg {...common}>
        <path d="M3 10 12 4l9 6M5 10v9M19 10v9M9 19v-6M15 19v-6M3 20h18" />
      </svg>
    );
  if (i === 1)
    return (
      <span aria-hidden className="text-base font-black leading-none text-ink">
        Әә
      </span>
    );
  if (i === 2)
    return (
      <svg {...common}>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c0-3 2.5-5.5 5-5.5s5 2.5 5 5.5M14 20c0-2.5 1.5-4.5 3-4.5s3.5 2 3.5 4.5" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <Section
      id="about"
      bg="#FFFDF7"
      next="#F3EDFD"
      pad="pb-12 pt-9 sm:pb-14 sm:pt-12 lg:pb-14 lg:pt-12 short:lg:pt-8"
      decor={
        <>
          <Blob className="absolute -left-24 top-10 hidden w-96 opacity-25 lg:block" color="#9DDC82" />
          <Leaf className="absolute right-[4%] top-10 w-8 rotate-12 sm:w-10" />
          <Leaf className="absolute bottom-3 left-[56%] hidden w-6 -rotate-45 lg:block" color="#B8E07A" />
          <Flower className="absolute right-[30%] top-2 hidden w-7 lg:block" petal="#FFD84D" center="#FFA65C" />
          <Flower className="absolute bottom-4 right-[3%] w-7 sm:w-8" petal="#FF8FA3" />
          <Butterfly className="anim-bob absolute bottom-3 left-[28%] hidden w-10 md:block" />
          <Star className="absolute bottom-5 right-[18%] hidden w-5 sm:block" color="#8DDCF7" spin />
        </>
      }
    >
      <div className="about-grid">
        {/* Текст */}
        <div className="[grid-area:text] lg:self-end">
          <Heading id="about" kicker={t.about.kicker} title={t.about.title} tint="leaf" compact />
          <Reveal delay={80}>
            <p className="mt-2.5 text-pretty text-[15px] leading-relaxed text-ink/80">{t.about.lead}</p>
            <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-ink/70">{t.about.text}</p>
          </Reveal>
        </div>

        {/* Фото */}
        <Reveal className="relative mx-auto w-full max-w-[420px] py-1 [grid-area:photo] lg:max-w-[400px] lg:self-center lg:justify-self-start short:lg:max-w-[360px]">
          <div className="absolute -inset-2.5 -z-10 rotate-[-4deg] rounded-[32px] bg-leaf/50 sm:-inset-3" />
          <div className="absolute -bottom-3 -right-2 -z-10 h-20 w-20 rounded-full bg-sun/70 sm:h-24 sm:w-24" />
          <div className="overflow-hidden rounded-[28px] border-[5px] border-white bg-white shadow-[0_18px_36px_-24px_rgba(44,42,74,.4)]">
            <PhotoOr
              photo={site.aboutPhoto}
              alt={t.about.photoAlt}
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 420px, 92vw"
              className="aspect-[16/10] lg:aspect-[4/3]"
              fallback={<KindergartenScene className="h-full w-full" />}
            />
          </div>
          <Flower className="absolute -left-3 -top-3 w-10 sm:w-12" petal="#C7AEF4" />
        </Reveal>

        {/* Официальное название */}
        <Reveal className="relative self-start overflow-hidden rounded-[24px] bg-white px-4 py-3.5 ring-1 ring-ink/10 [grid-area:official] sm:px-5">
          <div aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-sun via-leaf to-sky" />
          <div className="flex items-start gap-3 sm:gap-4">
            <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sun-50 ring-2 ring-sun">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#B98600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="9" r="5" />
                <path d="m9 13-2 8 5-3 5 3-2-8" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[12.5px] font-extrabold text-sun-deep">{t.about.officialLabel}</p>
              <p lang="kk" className="mt-0.5 text-pretty text-[13.5px] font-bold leading-snug text-ink sm:text-[14px]">
                {t.about.official}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Четыре карточки */}
        <ul className="grid grid-cols-2 gap-2.5 [grid-area:features] sm:gap-3 lg:mt-2 lg:grid-cols-4">
          {t.about.features.map((f, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 70}
              className={`${featureStyles[i].card} flex flex-col gap-2 p-3 ring-1 transition-transform duration-200 hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-3`}
            >
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl sm:h-10 sm:w-10 sm:rounded-2xl ${featureStyles[i].icon}`}>
                <FeatureIcon i={i} />
              </span>
              <div className="min-w-0">
                <h3 className="break-words text-[14px] font-black leading-tight text-ink min-[375px]:text-[15px] lg:text-base">{f.title}</h3>
                <p className="mt-0.5 text-[12.5px] leading-snug text-ink/65 sm:text-[13px]">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
