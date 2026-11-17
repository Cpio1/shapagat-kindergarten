"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";
import { sectionIds, type SectionId } from "@/lib/site";
import { langs } from "@/lib/i18n";
import { CloseIcon, Logo, MenuIcon } from "./Illustrations";

export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.ui.language} className={`flex rounded-full bg-lilac-50 p-1 ring-1 ring-lilac/40 ${className}`}>
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={`min-w-10 rounded-full px-2 py-1.5 sm:min-w-11 sm:px-2.5 text-xs font-extrabold transition-all duration-200 ease-out sm:text-[13px] ${
            lang === l ? "bg-white text-lilac-deep shadow-sm" : "text-ink/60 hover:text-ink"
          }`}
        >
          {l === "kk" ? "ҚАЗ" : "РУС"}
        </button>
      ))}
    </div>
  );
}

function useActiveSection() {
  const [active, setActive] = useState<SectionId>("home");
  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: "-80px 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1280 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-milk/95 shadow-[0_6px_24px_-12px_rgba(44,42,74,.25)] backdrop-blur" : "bg-milk/80 backdrop-blur-sm"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2">
        {t.ui.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:h-[72px]">
        <a href="#home" className="flex min-w-0 shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-10 lg:h-11 lg:w-11" />
          <span className="leading-none">
            <span className="block text-lg font-black tracking-tight text-ink lg:text-xl">Шапағат</span>
            <span className="hidden text-[11px] font-bold text-ink/55 min-[360px]:block">{t.hero.kindergarten}</span>
          </span>
        </a>

        <nav aria-label={t.ui.menu} className="ml-auto hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`rounded-full px-3 py-2 text-[14px] font-bold transition-colors duration-200 ${
                    active === id ? "bg-sun-50 text-ink ring-1 ring-sun" : "text-ink/70 hover:bg-white hover:text-ink"
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LangSwitch className="ml-auto xl:ml-3" />

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl bg-sun text-ink transition-transform duration-200 active:scale-95 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full grid overflow-hidden bg-milk shadow-[0_18px_30px_-18px_rgba(44,42,74,.35)] transition-[grid-template-rows,opacity] duration-300 ease-out xl:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        inert={!open}
      >
        <div className="min-h-0">
          <nav aria-label={t.ui.menu} className="max-h-[calc(100dvh-64px)] overflow-y-auto px-4 pb-5 pt-1 sm:px-6">
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {sectionIds.map((id, i) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "true" : undefined}
                    className={`flex items-center gap-2 rounded-2xl px-3 py-3 text-[15px] font-extrabold transition-colors ${menuTint[i % menuTint.length]} ${
                      active === id ? "ring-2 ring-ink/15" : ""
                    }`}
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-current opacity-60" />
                    <span className="min-w-0 break-words text-ink">{t.nav[id]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const menuTint = ["bg-sun-50 text-sun-deep", "bg-sky-50 text-sky-deep", "bg-leaf-50 text-leaf-deep", "bg-peach-50 text-peach-deep", "bg-lilac-50 text-lilac-deep"];
