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
      decor={
        <>
          <Blob className="absolute -left-24 top-10 hidden w-96 opacity-25 lg:block" color="#9DDC82" />
          <Leaf className="absolute right-[4%] top-10 w-8 rotate-12 sm:w-10" />
          <Leaf className="absolute bottom-20 left-[45%] hidden w-7 -rotate-45 lg:block" color="#B8E07A" />
          <Flower className="absolute right-[42%] top-14 hidden w-9 lg:block" petal="#FFD84D" center="#FFA65C" />
          <Flower className="absolute bottom-16 right-[3%] w-8 sm:w-10" petal="#FF8FA3" />
          <Butterfly className="anim-bob absolute left-[3%] bottom-24 hidden w-12 md:block" />
          <Star className="absolute right-[18%] bottom-10 hidden w-5 sm:block" color="#8DDCF7" spin />
        </>
      }
    >
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-14">
        {/* Фото */}
        <Reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div className="absolute -inset-3 -z-10 rotate-[-4deg] rounded-[36px] bg-leaf/50 sm:-inset-4" />
          <div className="absolute -bottom-4 -right-3 -z-10 h-24 w-24 rounded-full bg-sun/70 sm:h-32 sm:w-32" />
          <div className="overflow-hidden rounded-[32px] border-[6px] border-white bg-white shadow-[0_20px_40px_-24px_rgba(44,42,74,.4)]">
            <PhotoOr
              photo={site.aboutPhoto}
              alt={t.about.photoAlt}
              sizes="(min-width: 1024px) 480px, 92vw"
              className="aspect-[16/10] sm:aspect-[5/4]"
              fallback={<KindergartenScene className="h-full w-full" />}
            />
          </div>
          <Flower className="absolute -left-4 -top-4 w-12 sm:w-14" petal="#C7AEF4" />
        </Reveal>

        {/* Текст */}
        <div className="order-1 lg:order-2">
          <Heading id="about" kicker={t.about.kicker} title={t.about.title} tint="leaf" />
          <Reveal delay={80}>
            <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink/80 sm:text-base">{t.about.lead}</p>
            <p className="mt-2 text-pretty text-[15px] leading-relaxed text-ink/70 sm:text-base">{t.about.text}</p>
          </Reveal>
        </div>
      </div>

      <ul className="mt-9 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-12 lg:grid-cols-4">
        {t.about.features.map((f, i) => (
          <Reveal as="li" key={i} delay={i * 70} className={`${featureStyles[i].card} p-3.5 ring-1 transition-transform duration-200 hover:-translate-y-1 sm:p-5`}>
            <span className={`grid h-10 w-10 place-items-center rounded-2xl ${featureStyles[i].icon}`}>
              <FeatureIcon i={i} />
            </span>
            <h3 className="mt-3 break-words text-[14px] font-black leading-tight text-ink min-[375px]:text-[15px] sm:text-lg">{f.title}</h3>
            <p className="mt-1 text-[12.5px] leading-snug text-ink/65 sm:text-sm">{f.text}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="relative mt-5 overflow-hidden rounded-[28px] bg-white p-5 ring-1 ring-ink/10 sm:mt-6 sm:p-6">
        <div aria-hidden className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-sun via-leaf to-sky" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
          <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sun-50 ring-2 ring-sun">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#B98600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="9" r="5" />
              <path d="m9 13-2 8 5-3 5 3-2-8" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-extrabold text-sun-deep">{t.about.officialLabel}</p>
            <p lang="kk" className="mt-1 text-pretty text-[14px] font-bold leading-relaxed text-ink sm:text-[15px]">
              {t.about.official}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
