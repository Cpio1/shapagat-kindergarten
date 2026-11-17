"use client";

import { useLang } from "./LangProvider";
import { sectionIds, site } from "@/lib/site";
import { Cloud, Star } from "./Decor";
import { InstagramIcon, Logo, PhoneIcon, PinIcon } from "./Illustrations";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative isolate overflow-hidden bg-[#3B3170] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute -left-6 top-6 w-24 opacity-10" />
        <Cloud className="absolute right-[8%] bottom-10 w-28 opacity-10" />
        <Star className="absolute right-[30%] top-8 w-5 opacity-70" color="#FFD84D" spin />
        <Star className="absolute left-[40%] bottom-6 w-4 opacity-60" color="#8DDCF7" />
      </div>
      <div className="h-2 bg-[linear-gradient(90deg,#FFA65C,#FFD84D,#9DDC82,#8DDCF7,#C7AEF4)]" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:py-12">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <span className="leading-none">
              <span className="block text-2xl font-black">Шапағат</span>
              <span className="mt-1 block text-[13px] font-bold text-white/70">{t.hero.kindergarten}</span>
            </span>
          </a>
          <p className="mt-4 max-w-md text-[14px] font-bold text-white/85">{t.hero.slogan}</p>
          <p className="mt-4 text-[12px] font-extrabold text-sun">{t.footer.official}</p>
          <p lang="kk" className="mt-1 max-w-md text-[12.5px] leading-relaxed text-white/65">
            {t.about.official}
          </p>
        </div>

        <nav aria-label={t.footer.nav}>
          <h2 className="text-[13px] font-extrabold text-sun">{t.footer.nav}</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-[14.5px] font-bold text-white/80 transition-colors hover:text-white">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[13px] font-extrabold text-sun">{t.footer.contacts}</h2>
          <ul className="mt-3 space-y-3 text-[14px]">
            <li className="flex gap-2.5 text-white/80">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
              <span>{t.contacts.addressText}</span>
            </li>
            <li>
              <a href={site.phone.href} className="flex items-center gap-2.5 font-extrabold text-white hover:text-sun">
                <PhoneIcon className="h-5 w-5 shrink-0 text-leaf" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={site.instagramReel} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-bold text-white/80 hover:text-white">
                <InstagramIcon className="h-5 w-5 shrink-0 text-lilac" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-[12.5px] text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {t.meta.shortName}. {t.footer.rights}
          </p>
          <a href="#home" className="font-bold text-white/70 hover:text-white">
            ↑ {t.ui.toTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
