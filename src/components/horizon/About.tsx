import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            — La maison
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-serif text-[clamp(1.6rem,4.2vw,2.6rem)] font-normal leading-[1.25] text-[var(--ivory)]">
            Horizon RH est une{" "}
            <span className="text-gradient-luxe">start-up sociale</span> basée
            au Sénégal, dédiée à l'accompagnement des jeunes dans leurs
            transitions scolaires et professionnelles, ainsi qu'au{" "}
            <span className="text-gradient-luxe">conseil RH innovant</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}