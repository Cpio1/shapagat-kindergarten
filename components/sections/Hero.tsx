"use client";

import { useLang } from "../LangProvider";
import { site } from "@/lib/site";
import { dictionaries } from "@/lib/i18n";
import { Balloon, Cloud, Heart, Kite, Rainbow, Squiggle, Star, Sun, Wave } from "../Decor";
import { ArrowRight, KindergartenScene, PhoneIcon } from "../Illustrations";
import { PhotoOr, btn } from "../ui";

const letterColors = ["#E06A12", "#1A7FAB", "#3A8A2B", "#6C48B8", "#D14B6A", "#B98600", "#1A7FAB"];
const statStyles = [
  { box: "bg-sun rounded-[26px_10px_26px_26px]", shadow: "shadow-[0_6px_0_-1px_#E8B92A]" },
  { box: "bg-sky rounded-[10px_26px_26px_26px]", shadow: "shadow-[0_6px_0_-1px_#5EC3E8]" },
  { box: "bg-leaf rounded-[26px_26px_10px_26px]", shadow: "shadow-[0_6px_0_-1px_#76C258]" },
];

export function Hero() {
  const { t, lang } = useLang();
  const other = dictionaries[lang === "kk" ? "ru" : "kk"];

  return (
    <section id="home" aria-labelledby="home-title" className="relative isolate overflow-hidden bg-gradient-to-b from-[#D9F3FD] via-[#EEFAFE] to-milk">
      {/* Декор */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="anim-drift absolute left-[3%] top-6 w-20 opacity-90 sm:w-28 lg:left-[2%] lg:top-10 lg:w-36">
          <Cloud />
        </div>
        <div className="anim-drift absolute right-[30%] top-3 hidden w-24 opacity-80 [animation-delay:-4s] lg:block">
          <Cloud />
        </div>
        <div className="anim-drift absolute bottom-24 left-[42%] hidden w-20 opacity-70 [animation-delay:-2s] md:block">
          <Cloud color="#F3EDFD" />
        </div>
        <Star className="absolute left-[46%] top-[18%] hidden w-6 lg:block" color="#FFA65C" spin />
        <Star className="absolute left-[1.5%] top-[34%] hidden w-5 2xl:block" color="#C7AEF4" spin />
        <Star className="absolute right-4 top-[52%] w-4 sm:w-6" color="#FFD84D" spin />
        <Heart className="absolute bottom-16 left-[4%] hidden w-6 lg:block" />
        <div className="anim-bob absolute -left-3 top-[58%] hidden w-10 lg:block xl:left-4">
          <Balloon color="#C7AEF4" />
        </div>
        <div className="anim-bob absolute right-[3%] top-[12%] hidden w-9 [animation-delay:-2s] xl:block">
          <Kite />
        </div>
        <Squiggle className="absolute bottom-20 right-[6%] hidden w-24 lg:block" color="#9DDC82" />
      </div>

      <div className="hero-grid mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-10 lg:pb-20 lg:pt-12">
        {/* Вступление */}
        <div className="[grid-area:intro]">
          <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-[12px] font-extrabold text-ink/75 shadow-sm ring-1 ring-sky/50 sm:text-[13px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-leaf-deep" />
            <span className="truncate">{t.hero.badge}</span>
          </p>
          <h1 id="home-title" className="mt-3 sm:mt-4">
            <span className="block text-[44px] font-black leading-[.95] min-[360px]:text-[52px] tracking-tight sm:text-7xl lg:text-[84px]" aria-label="«Шапағат»">
              {"«Шапағат»".split("").map((ch, i) => (
                <span key={i} aria-hidden style={{ color: ch === "«" || ch === "»" ? "#FFA65C" : letterColors[i % letterColors.length] }}>
                  {ch}
                </span>
              ))}
            </span>
            <span className="mt-1 block text-lg font-extrabold text-ink/80 sm:text-2xl">{t.hero.kindergarten}</span>
          </h1>
          <div className="mt-3 sm:mt-5">
            <p className="text-balance text-xl font-black leading-snug text-ink sm:text-2xl lg:text-[28px]">{t.hero.slogan}</p>
            <Squiggle className="mt-1 block w-24 sm:w-32" color="#FFD84D" />
            <p lang={lang === "kk" ? "ru" : "kk"} className="mt-2 text-sm font-bold italic text-ink/50 sm:text-[15px]">
              {other.hero.slogan}
            </p>
          </div>
        </div>

        {/* Фото */}
        <div className="relative mx-auto w-full max-w-[520px] [grid-area:photo] md:max-w-[460px] lg:max-w-none lg:self-center">
          <Rainbow className="absolute -left-6 -top-6 w-28 opacity-90 sm:-left-10 sm:-top-10 sm:w-44 lg:-left-14 lg:-top-12 lg:w-56" />
          <Sun className="absolute -right-3 -top-5 z-10 w-16 sm:-right-6 sm:-top-8 sm:w-24 lg:w-28" />
          <div className="relative rotate-[1.5deg] rounded-[42%_58%_46%_54%/38%_40%_60%_62%] bg-white p-2 shadow-[0_24px_50px_-24px_rgba(44,42,74,.45)] sm:p-3">
            <PhotoOr
              photo={site.heroPhoto}
              alt={t.hero.photoAlt}
              sizes="(min-width: 1024px) 560px, 92vw"
              preload
              className="aspect-[4/3] overflow-hidden rounded-[42%_58%_46%_54%/38%_40%_60%_62%]"
              fallback={<KindergartenScene className="h-full w-full" />}
            />
          </div>
          <div className="absolute -bottom-3 -left-1 z-10 -rotate-6 rounded-2xl bg-lilac px-3 py-2 text-center shadow-lg sm:-bottom-4 sm:left-2 sm:px-4 sm:py-2.5">
            <span className="block text-lg font-black leading-none text-ink sm:text-2xl">10,5</span>
            <span className="block text-[11px] font-extrabold text-ink/75 sm:text-xs">{lang === "kk" ? "сағат" : "часов"}</span>
          </div>
          <div className="absolute -bottom-2 right-6 z-10 w-12 sm:w-16">
            <Balloon color="#FFA65C" className="anim-bob" />
          </div>
        </div>

        {/* Текст, кнопки, показатели */}
        <div className="[grid-area:rest]">
          <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-ink/75 sm:text-base">{t.hero.greeting}</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a href="#contacts" className={`${btn.primary} px-4 sm:px-6`}>
              <PhoneIcon className="h-5 w-5 shrink-0" />
              {t.hero.contact}
            </a>
            <a href="#about" className={`${btn.secondary} px-4 sm:px-6`}>
              {t.hero.about}
              <ArrowRight className="h-5 w-5 shrink-0" />
            </a>
          </div>
          <ul className="mt-7 grid grid-cols-3 gap-2.5 sm:gap-4 lg:max-w-xl">
            {t.hero.stats.map((s, i) => (
              <li key={i} className={`${statStyles[i].box} ${statStyles[i].shadow} px-2.5 py-3 text-ink transition-transform duration-200 hover:-translate-y-1 sm:px-4 sm:py-4`}>
                <span className={`block font-black leading-none ${s.value.length > 3 ? "text-[15px] min-[375px]:text-base sm:text-[22px]" : "text-2xl sm:text-[28px]"}`}>{s.value}</span>
                <span className="mt-1.5 block text-[11px] font-bold leading-tight text-ink/80 sm:text-[13px]">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-px">
        <Wave color="#FFFDF7" />
      </div>
    </section>
  );
}
