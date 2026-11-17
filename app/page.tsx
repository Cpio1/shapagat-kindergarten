import { LangProvider } from "@/components/LangProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Groups } from "@/components/sections/Groups";
import { Nutrition } from "@/components/sections/Nutrition";
import { Clubs } from "@/components/sections/Clubs";
import { Gallery } from "@/components/sections/Gallery";
import { Documents } from "@/components/sections/Documents";
import { Contacts } from "@/components/sections/Contacts";
import { getDocuments, getGalleryPhotos } from "@/lib/media";
import { site } from "@/lib/site";

export default function Page() {
  const photos = getGalleryPhotos();
  const docs = getDocuments();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: "«Шапағат» бөбекжай-бақшасы",
    telephone: site.phone.display,
    address: {
      "@type": "PostalAddress",
      addressCountry: "KZ",
      addressRegion: "Ақтөбе облысы",
      addressLocality: "Қайыңды ауылы",
      streetAddress: "Бейбітшілік көшесі, 1-құрылыс",
    },
    sameAs: [site.instagramReel],
  };

  return (
    <LangProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Groups />
        <Nutrition />
        <Clubs />
        <Gallery photos={photos} />
        <Documents docs={docs} />
        <Contacts />
      </main>
      <Footer />
    </LangProvider>
  );
}
