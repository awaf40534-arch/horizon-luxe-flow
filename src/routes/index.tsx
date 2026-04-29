import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/horizon/Background";
import { Nav } from "@/components/horizon/Nav";
import { Hero } from "@/components/horizon/Hero";
import { About } from "@/components/horizon/About";
import { Pillars } from "@/components/horizon/Pillars";
import { Stats } from "@/components/horizon/Stats";
import { BentoServices } from "@/components/horizon/BentoServices";
import { QRSection } from "@/components/horizon/QRSection";
import { Contact } from "@/components/horizon/Contact";
import { Footer } from "@/components/horizon/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Horizon RH — Éclairer les parcours, révéler les talents" },
      {
        name: "description",
        content:
          "Start-up sociale sénégalaise dédiée à l'orientation des jeunes, à l'accompagnement carrière et au conseil RH innovant pour les entreprises.",
      },
      { property: "og:title", content: "Horizon RH — Éclairer les parcours" },
      {
        property: "og:description",
        content: "Orientation, carrière et conseil RH au Sénégal.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Background />
      <Nav />
      <Hero />
      <About />
      <Pillars />
      <Stats />
      <BentoServices />
      <QRSection />
      <Contact />
      <Footer />
    </main>
  );
}
