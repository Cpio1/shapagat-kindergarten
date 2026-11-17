"use client";

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { dictionaries, defaultLang, type Dict, type Lang } from "@/lib/i18n";

const KEY = "shapagat-lang";
const listeners = new Set<() => void>();
let memoryLang: Lang | null = null;

function read(): Lang {
  if (memoryLang) return memoryLang;
  try {
    const v = localStorage.getItem(KEY);
    if (v === "kk" || v === "ru") return (memoryLang = v);
  } catch {
    /* storage недоступен */
  }
  return defaultLang;
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: defaultLang, t: dictionaries[defaultLang], setLang: () => {} });

/** Находит раздел, который сейчас у верхнего края (под шапкой). */
function currentAnchor() {
  const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 64;
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
  for (const s of sections) {
    const r = s.getBoundingClientRect();
    if (r.bottom > headerH + 1) return { el: s, offset: r.top };
  }
  return null;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, read, () => defaultLang);
  const anchor = useRef<{ el: HTMLElement; offset: number } | null>(null);

  const setLang = useCallback((l: Lang) => {
    if (l === read()) return;
    anchor.current = currentAnchor();
    memoryLang = l;
    try {
      localStorage.setItem(KEY, l);
    } catch {
      /* ignore */
    }
    listeners.forEach((cb) => cb());
  }, []);

  // Сохраняем текущий раздел на экране при смене языка (длина текста меняется).
  useLayoutEffect(() => {
    const a = anchor.current;
    anchor.current = null;
    if (!a) return;
    const delta = a.el.getBoundingClientRect().top - a.offset;
    if (Math.abs(delta) > 1) window.scrollTo({ top: window.scrollY + delta, behavior: "instant" });
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dictionaries[lang].meta.title;
  }, [lang]);

  return <LangContext.Provider value={{ lang, t: dictionaries[lang], setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
