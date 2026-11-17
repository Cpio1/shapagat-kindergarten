import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: "variable",
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "«Шапағат» бөбекжай-бақшасы — Қайыңды ауылы",
  description:
    "«Шапағат» мемлекеттік бөбекжай-бақшасы: Ақтөбе облысы, Мұғалжар ауданы, Қайыңды ауылы. 2 аралас жас тобы, қазақ тілінде тәрбие, 4 мезгіл тамақ. Ясли-сад «Шапағат», село Кайынды.",
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    alternateLocale: ["ru_RU"],
    title: "«Шапағат» бөбекжай-бақшасы",
    description: "Бақытты балалық шақ осы жерден басталады · Счастливое детство начинается здесь",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF7",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={nunito.variable} style={{ colorScheme: "light" }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{var l=localStorage.getItem('shapagat-lang');if(l==='ru')document.documentElement.lang='ru'}catch(e){}",
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
