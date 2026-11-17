"use client";

import { useLang } from "../LangProvider";
import { site } from "@/lib/site";
import { Balloon, Flower, Heart, Squiggle, Sun } from "../Decor";
import { ClockIcon, ExternalIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../Illustrations";
import { Reveal } from "../Reveal";
import { Heading, Section, btn } from "../ui";

function MapIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#EAF7E2" />
      <path d="M-10 210c80-30 140 10 220-20s140-60 200-40" stroke="#BFE8F7" strokeWidth="26" fill="none" />
      <g stroke="#fff" strokeWidth="14" strokeLinecap="round" fill="none">
        <path d="M-10 120h420" />
        <path d="M150 -10v320" />
        <path d="M300 -10 260 310" />
        <path d="M-10 40 150 120" />
      </g>
      <g fill="#D3EFC6">
        <rect x="20" y="140" width="110" height="50" rx="12" />
        <rect x="170" y="20" width="110" height="80" rx="14" />
        <rect x="320" y="140" width="70" height="60" rx="12" />
        <rect x="170" y="140" width="80" height="50" rx="12" />
      </g>
      <g fill="#9DDC82">
        <circle cx="60" cy="250" r="14" />
        <circle cx="82" cy="262" r="10" />
        <circle cx="350" cy="60" r="16" />
        <circle cx="372" cy="76" r="10" />
      </g>
      <g className="anim-bob">
        <ellipse cx="210" cy="132" rx="18" ry="6" fill="#2C2A4A" opacity=".15" />
        <path d="M210 128s-26-24-26-44a26 26 0 0 1 52 0c0 20-26 44-26 44Z" fill="#FFA65C" />
        <circle cx="210" cy="84" r="11" fill="#fff" />
      </g>
    </svg>
  );
}

export function Contacts() {
  const { t } = useLang();
  const c = t.contacts;
  const rows = [
    { icon: <PinIcon />, label: c.address, value: c.addressText, tint: "bg-peach/40" },
    { icon: <PhoneIcon />, label: c.phone, value: site.phone.display, href: site.phone.href, tint: "bg-sun/60" },
    { icon: <ClockIcon />, label: c.hours, value: c.hoursText, tint: "bg-sky/50" },
    { icon: <InstagramIcon />, label: c.instagram, value: c.instagramText, href: site.instagramReel, external: true, tint: "bg-lilac/50" },
    ...(site.whatsapp
      ? [{ icon: <WhatsAppIcon />, label: c.whatsapp, value: `+${site.whatsapp}`, href: `https://wa.me/${site.whatsapp}`, external: true, tint: "bg-leaf/50" }]
      : []),
  ];

  return (
    <Section
      id="contacts"
      bg="#FFF0E3"
      decor={
        <>
          <Sun className="absolute -right-6 -top-6 w-20 opacity-90 sm:w-28" />
          <Flower className="absolute left-[2%] bottom-10 w-9 sm:w-11" petal="#C7AEF4" />
          <Heart className="absolute left-[46%] top-10 hidden w-6 lg:block" color="#FFA65C" />
          <div className="anim-bob absolute bottom-16 right-[2%] hidden w-9 md:block">
            <Balloon color="#8DDCF7" />
          </div>
          <Squiggle className="absolute bottom-6 left-[30%] hidden w-24 md:block" color="#FFD84D" />
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Heading id="contacts" kicker={t.contacts.kicker} title={c.title} lead={c.lead} tint="peach" />
          <ul className="mt-6 grid gap-2.5 sm:gap-3">
            {rows.map((r, i) => {
              const inner = (
                <>
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-ink ${r.tint}`}>{r.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[12px] font-extrabold text-ink/50">{r.label}</span>
                    <span className="block break-words text-[15px] font-bold leading-snug text-ink">{r.value}</span>
                  </span>
                  {r.external && <ExternalIcon className="h-4 w-4 shrink-0 text-ink/40" />}
                </>
              );
              const cls = "flex items-center gap-3 rounded-[22px] bg-white p-3 ring-1 ring-ink/10 sm:p-3.5";
              return (
                <Reveal as="li" key={i} delay={i * 60}>
                  {r.href ? (
                    <a
                      href={r.href}
                      {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`${cls} transition-all duration-200 hover:-translate-y-0.5 hover:ring-peach`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={site.phone.href} className={`${btn.primary} w-full sm:w-auto`}>
              <PhoneIcon className="h-5 w-5" />
              {c.call}
            </a>
            {site.whatsapp && (
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className={`${btn.secondary} w-full sm:w-auto`}>
                <WhatsAppIcon className="h-5 w-5" />
                {c.whatsapp}
              </a>
            )}
          </div>
        </div>

        {/* Карта */}
        <Reveal className="relative lg:pt-2">
          <div className="absolute -inset-2 -z-10 rotate-[2deg] rounded-[36px] bg-peach/40 sm:-inset-3" />
          <div className="overflow-hidden rounded-[32px] border-[6px] border-white bg-white shadow-[0_20px_40px_-24px_rgba(44,42,74,.45)]">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[420px]">
              {site.map.embedUrl ? (
                <iframe title={c.mapTitle} src={site.map.embedUrl} loading="lazy" className="absolute inset-0 h-full w-full border-0" />
              ) : (
                <MapIllustration />
              )}
            </div>
            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[12px] font-extrabold text-ink/50">{c.mapTitle}</p>
                <p className="text-[15px] font-bold text-ink">{c.mapCaption}</p>
              </div>
              <a href={site.map.searchUrl} target="_blank" rel="noopener noreferrer" className={`${btn.small} shrink-0 bg-leaf text-ink hover:bg-leaf/80`}>
                <PinIcon className="h-4 w-4" />
                {c.mapOpen}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
