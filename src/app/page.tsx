import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import WhatsAppFab from "@/components/WhatsAppFab";

import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Bairro from "@/components/sections/Bairro";
import Pilares from "@/components/sections/Pilares";
import Planta from "@/components/sections/Planta";
import Servicos from "@/components/sections/Servicos";
import Lazer from "@/components/sections/Lazer";
import Inteligencia from "@/components/sections/Inteligencia";
import Pavimentos from "@/components/sections/Pavimentos";
import DesignSec from "@/components/sections/DesignSec";
import InvestirMorar from "@/components/sections/InvestirMorar";
import Grupo from "@/components/sections/Grupo";
import Localizacao from "@/components/sections/Localizacao";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/sections/Footer";

import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Residence",
  name: site.brand,
  description: site.description,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "QS 5, Rua 310, Lote 12",
    addressLocality: "Águas Claras",
    addressRegion: "DF",
    addressCountry: "BR",
  },
  amenityFeature: [
    "Lazer panorâmico",
    "SPA aquecido",
    "Churrasqueira",
    "Brinquedoteca",
    "Pet place",
    "Armários inteligentes para delivery",
    "Segurança monitorada",
    "Internet de alta velocidade",
  ].map((n) => ({ "@type": "LocationFeatureSpecification", name: n })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Preloader />
      <SmoothScroll />
      <Cursor />
      <Header />
      <WhatsAppFab />

      <main>
        <Hero />
        <Manifesto />
        <Bairro />
        <Pilares />
        <Planta />
        <Servicos />
        <Lazer />
        <Inteligencia />
        <Pavimentos />
        <DesignSec />
        <InvestirMorar />
        <Grupo />
        <Localizacao />
        <CtaFinal />
      </main>

      <Footer />
    </>
  );
}
