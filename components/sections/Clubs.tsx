"use client";

import { useLang } from "../LangProvider";
import { clubs, type Club } from "@/lib/site";
import { Cloud, Note, Squiggle, Star } from "../Decor";
import { DanceIllustration, SpeechIllustration, TaekwondoIllustration } from "../Illustrations";
import { Reveal } from "../Reveal";
import { Heading, Section } from "../ui";

/** Чтобы добавить кружок: запись в lib/site.ts (clubs), перевод в lib/i18n.ts (clubs.items) и стиль здесь. */
const clubStyle: Record<Club["id"], { icon: React.ReactNode; card: string; blob: string }> = {
  speech: { icon: <SpeechIllustration className="h-14 w-14" />, card: "rounded-[34px_34px_34px_12px] ring-sky", blob: "bg-sky/30" },
  dance: { icon: <DanceIllustration className="h-14 w-14" />, card: "rounded-[12px_34px_34px_34px] ring-lilac", blob: "bg-lilac/35" },
  taekwondo: { icon: <TaekwondoIllustration className="h-14 w-14" />, card: "rounded-[34px_12px_34px_34px] ring-leaf", blob: "bg-leaf/35" },
};

export function Clubs() {
  const { t } = useLang();
  return (
    <Section
      id="clubs"
      bg="#E6F7FD"
      next="#FFFDF7"
      decor={
        <>
          <div className="anim-drift absolute right-[4%] top-8 w-24 sm:w-32">
            <Cloud />
          </div>
          <div className="anim-drift absolute -left-6 bottom-16 hidden w-28 [animation-delay:-5s] md:block">
            <Cloud />
          </div>
          <Star className="absolute left-[42%] top-12 hidden w-6 lg:block" color="#FFA65C" spin />
          <Note className="absolute right-[24%] bottom-12 hidden w-7 sm:block" color="#C7AEF4" />
          <Squiggle className="absolute left-[3%] top-8 w-16 sm:w-20" color="#FFD84D" />
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-12">
        <Heading id="clubs" kicker={t.clubs.kicker} title={t.clubs.title} lead={t.clubs.lead} tint="sky" />
        <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {clubs.map((c, i) => {
            const s = clubStyle[c.id];
            const item = t.clubs.items[c.id];
            return (
              <Reveal
                as="li"
                key={c.id}
                delay={i * 90}
                className={`group relative flex items-center gap-4 overflow-hidden bg-white p-4 ring-2 transition-transform duration-200 hover:-translate-y-1 sm:flex-col sm:items-start sm:p-5 ${s.card} ${i === 1 ? "sm:translate-y-4 sm:hover:translate-y-3" : ""}`}
              >
                <span aria-hidden className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${s.blob}`} />
                <span className="relative shrink-0 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">{s.icon}</span>
                <div className="relative min-w-0">
                  <h3 className="text-lg font-black leading-tight text-ink">{item.name}</h3>
                  <p className="mt-0.5 text-[13px] font-bold text-ink/55">{item.hint}</p>
                  {!c.confirmed && (
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-ink/15 px-2.5 py-0.5 text-[12px] font-extrabold text-ink/55">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-peach" />
                      {t.clubs.status}
                    </span>
                  )}
                  <p className="mt-2 hidden text-[13px] leading-snug text-ink/55 sm:block">{t.clubs.soon}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
