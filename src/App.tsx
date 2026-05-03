import { Background } from "@/components/horizon/Background";
import { Nav } from "@/components/horizon/Nav";
import { Hero } from "@/components/horizon/Hero";
import { About } from "@/components/horizon/About";
import { BentoServices } from "@/components/horizon/BentoServices";
import { Sectors } from "@/components/horizon/Sectors";
import { Contact } from "@/components/horizon/Contact";
import { Footer } from "@/components/horizon/Footer";

export function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Background />
      <Nav />
      <Hero />
      <About />
      <BentoServices />
      <Sectors />
      <Contact />
      <Footer />
    </main>
  );
}