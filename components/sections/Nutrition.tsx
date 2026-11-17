"use client";

import { useLang } from "../LangProvider";
import { Apple, Banana, Carrot, Dots, Fork, Leaf, Pear, Spoon } from "../Decor";
import { MealIcon, Plate } from "../Illustrations";
import { Reveal } from "../Reveal";
import { Heading, Section } from "../ui";

const mealStyles = [
  { card: "bg-white ring-sun rounded-[30px_30px_10px_30px]", num: "bg-sun", soft: "bg-sun/40" },
  { card: "bg-white ring-leaf rounded-[30px_30px_30px_10px]", num: "bg-leaf", soft: "bg-leaf/40" },
  { card: "bg-white ring-peach rounded-[30px_10px_30px_30px]", num: "bg-peach", soft: "bg-peach/40" },
  { card: "bg-white ring-lilac rounded-[10px_30px_30px_30px]", num: "bg-lilac", soft: "bg-lilac/40" },
];

function MealCard({ i, name, kind }: { i: number; name: string; kind: string }) {
  const s = mealStyles[i];
  return (
    <Reveal as="li" delay={i * 80} className={`flex items-center gap-2.5 p-2.5 ring-2 shadow-[0_10px_24px_-18px_rgba(44,42,74,.5)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-[-.5deg] sm:gap-4 sm:p-4 ${s.card}`}>
      <span className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl sm:h-14 sm:w-14 ${s.soft}`}>
        <MealIcon kind={kind} className="h-9 w-9 sm:h-10 sm:w-10" />
        <span className={`absolute -left-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full text-[12px] font-black text-ink ring-2 ring-white ${s.num}`}>
          {i + 1}
        </span>
      </span>
      <h3 className="min-w-0 break-words text-[15px] font-black leading-tight text-ink sm:text-lg">{name}</h3>
    </Reveal>
  );
}

export function Nutrition() {
  const { t } = useLang();
  const meals = t.nutrition.meals;
  return (
    <Section
      id="nutrition"
      bg="#FFF6D6"
      next="#E6F7FD"
      decor={
        <>
          <Dots className="absolute left-[2%] top-10 w-16 opacity-40 sm:w-20" color="#FFA65C" />
          <Dots className="absolute bottom-16 right-[2%] hidden w-20 opacity-40 md:block" color="#9DDC82" />
          <Leaf className="absolute right-[8%] top-12 w-8 rotate-45" color="#9DDC82" />
          <Apple className="absolute left-[4%] bottom-20 hidden w-10 -rotate-12 lg:block" />
          <Banana className="absolute right-[30%] top-6 hidden w-12 rotate-12 lg:block" />
        </>
      }
    >
      <Heading id="nutrition" kicker={t.nutrition.kicker} title={t.nutrition.title} lead={t.nutrition.lead} tint="sun" align="center" />

      <div className="mt-8 grid items-center gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10">
        {/* Тарелка */}
        <Reveal className="relative mx-auto w-56 sm:w-72 lg:order-2 lg:w-[340px]">
          <div aria-hidden className="absolute inset-[-8%] -z-10 rounded-full bg-[radial-gradient(circle,#FFE58A_0%,transparent_68%)]" />
          <Plate className="w-full" />
          <Spoon className="absolute -left-6 top-[18%] w-4 -rotate-12 sm:-left-9 sm:w-5" />
          <Fork className="absolute -right-6 top-[18%] w-4 rotate-12 sm:-right-9 sm:w-5" />
          <Carrot className="absolute -bottom-2 -left-4 w-10 sm:w-14" />
          <Pear className="absolute -right-3 bottom-2 w-8 rotate-12 sm:w-11" />
          <Apple className="absolute -top-2 right-6 w-9 sm:w-11" />
          <span className="absolute -left-2 top-0 grid h-16 w-16 -rotate-12 place-items-center rounded-full bg-peach text-center shadow-[0_6px_0_-1px_#E98A3C] sm:h-20 sm:w-20">
            <span className="leading-none">
              <span className="block text-2xl font-black text-ink sm:text-3xl">4</span>
              <span className="block text-[10px] font-extrabold text-ink/80 sm:text-[11px]">{t.nutrition.badge.replace(/^4\s*/, "")}</span>
            </span>
          </span>
          <span className="sr-only">{t.nutrition.plateAlt}</span>
        </Reveal>

        <ul className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:order-1 lg:grid-cols-1 lg:gap-4">
          {meals.slice(0, 2).map((m, i) => (
            <MealCard key={m.key} i={i} name={m.name} kind={m.key} />
          ))}
        </ul>
        <ul className="-mt-3.5 grid grid-cols-2 gap-2.5 sm:-mt-3 sm:gap-3 lg:order-3 lg:mt-0 lg:grid-cols-1 lg:gap-4">
          {meals.slice(2).map((m, i) => (
            <MealCard key={m.key} i={i + 2} name={m.name} kind={m.key} />
          ))}
        </ul>
      </div>

      <Reveal className="mt-7 text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[13px] font-bold text-ink/65 ring-1 ring-sun">
          <span aria-hidden className="h-2 w-2 rounded-full bg-leaf-deep" />
          {t.nutrition.menuNote}
        </p>
      </Reveal>
    </Section>
  );
}
