"use client";

import { useLang } from "../LangProvider";
import { site } from "@/lib/site";
import type { DocumentFile } from "@/lib/media";
import { Leaf, Pencil, Star } from "../Decor";
import { DownloadIcon, ExternalIcon, FolderIcon, PdfIcon } from "../Illustrations";
import { Reveal } from "../Reveal";
import { Heading, Section, btn } from "../ui";

const tabs = ["bg-sun", "bg-sky", "bg-lilac", "bg-peach", "bg-leaf"];

export function Documents({ docs }: { docs: DocumentFile[] }) {
  const { t } = useLang();
  const drive = site.documentsDriveUrl;
  return (
    <Section
      id="documents"
      bg="#ECF8E6"
      next="#FFF0E3"
      decor={
        <>
          <Pencil className="absolute right-[5%] top-10 w-24 rotate-[160deg] sm:w-28" color="#C7AEF4" />
          <Leaf className="absolute left-[3%] bottom-14 w-9 rotate-[-30deg]" />
          <Star className="absolute left-[50%] top-8 hidden w-5 lg:block" color="#FFD84D" spin />
        </>
      }
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <Heading id="documents" kicker={t.documents.kicker} title={t.documents.title} lead={t.documents.lead} tint="leaf" />
        {drive && (
          <Reveal>
            <a href={drive} target="_blank" rel="noopener noreferrer" className={`${btn.primary} w-full sm:w-auto`}>
              <FolderIcon className="h-5 w-5" />
              {t.documents.open}
            </a>
          </Reveal>
        )}
      </div>

      {docs.length > 0 ? (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((d, i) => (
            <Reveal as="li" key={d.href} delay={(i % 6) * 60} className="relative pt-3">
              <span aria-hidden className={`absolute left-5 top-0 h-5 w-20 rounded-t-xl ${tabs[i % tabs.length]}`} />
              <div className="relative flex h-full flex-col rounded-[22px] bg-white p-4 shadow-[0_14px_30px_-22px_rgba(44,42,74,.5)] ring-1 ring-ink/10 transition-transform duration-200 hover:-translate-y-1 sm:p-5">
                <div className="flex items-start gap-3">
                  <PdfIcon className="h-14 w-12 shrink-0" />
                  <div className="min-w-0">
                    <h3 className="break-words text-[15px] font-black leading-snug text-ink sm:text-base">{d.title}</h3>
                    <p className="mt-1 text-[12px] font-bold text-ink/50">
                      {t.documents.pdf} · {d.sizeKb >= 1024 ? `${(d.sizeKb / 1024).toFixed(1)} MB` : `${d.sizeKb} KB`}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 pt-1">
                  <a href={d.href} target="_blank" rel="noopener noreferrer" className={`${btn.small} bg-leaf/40 text-ink hover:bg-leaf/60`}>
                    <ExternalIcon className="h-4 w-4" />
                    {t.documents.view}
                  </a>
                  <a href={d.href} download className={`${btn.small} bg-ink/5 text-ink hover:bg-ink/10`}>
                    <DownloadIcon className="h-4 w-4" />
                    {t.documents.download}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      ) : (
        <Reveal className="mt-8 grid items-center gap-6 rounded-[30px] border-2 border-dashed border-leaf-deep/25 bg-white/70 p-5 sm:p-7 md:grid-cols-[auto_1fr]">
          <div aria-hidden className="relative mx-auto h-28 w-40 md:mx-0">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute top-0 flex h-24 w-[4.5rem] flex-col gap-1.5 rounded-xl bg-white p-2.5 shadow-md ring-1 ring-ink/10"
                style={{ left: `${i * 2.6}rem`, transform: `rotate(${(i - 1) * 8}deg)`, zIndex: i === 1 ? 2 : 1, top: i === 1 ? 0 : "0.5rem" }}
              >
                <PdfIcon className="h-8 w-7" />
                <span className="h-1.5 w-full rounded bg-ink/10" />
                <span className="h-1.5 w-2/3 rounded bg-ink/10" />
              </div>
            ))}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-black text-ink sm:text-xl">{t.documents.emptyTitle}</h3>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink/65">{t.documents.emptyText}</p>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
