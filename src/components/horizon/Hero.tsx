import { ArrowDown, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { Scene3D } from "./Scene3D";

const TITLE = ["Éclairer", "l'avenir,", "Optimiser", "le présent."];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center px-5 pt-28 pb-16 sm:px-8"
    >
      {/* Ambient 3D figures */}
      <Scene3D
        variant="ambient"
        className="pointer-events-none absolute inset-0 -z-[5] opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-white/5 px-4 py-1.5 backdrop-blur-md animate-[fade-up_0.8s_ease-out_both]"
        >
          <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--ivory)]/80">
            Sénégal · Start-up sociale
          </span>
        </div>

        <h1 className="font-serif text-[clamp(2.5rem,9vw,6.5rem)] font-medium leading-[1.02] tracking-tight text-[var(--ivory)]">
          {TITLE.map((word, i) => (
            <span
              key={i}
              className="mr-[0.25em] inline-block animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_both]"
              style={{ animationDelay: `${150 + i * 120}ms` }}
            >
              {i === 1 || i === 3 ? (
                <em className="not-italic text-gradient-luxe">{word}</em>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        <p
          className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-[var(--ivory)]/70 sm:text-lg animate-[fade-up_1s_ease-out_both]"
          style={{ animationDelay: "700ms" }}
        >
          Une start-up sociale basée au Sénégal dédiée à l'accompagnement des
          jeunes dans leurs transitions scolaires et au conseil RH innovant
          pour les entreprises.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-[fade-up_1.1s_ease-out_both]"
          style={{ animationDelay: "900ms" }}
        >
          <MagneticButton href="#services">
            Découvrir Horizon
          </MagneticButton>
          <a
            href="#contact"
            className="text-sm font-medium tracking-wide text-[var(--ivory)]/70 underline-offset-4 transition-colors hover:text-[var(--gold)] hover:underline"
          >
            Nous écrire →
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--ivory)]/50 transition-colors hover:text-[var(--gold)]"
        aria-label="Défiler"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>

      {/* Hero halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[120px]"
        style={{ background: "var(--gradient-luxe)" }}
      />
    </section>
  );
}