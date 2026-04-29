import {
  GraduationCap,
  Briefcase,
  Building2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { TiltCard } from "./TiltCard";
import { Reveal } from "./Reveal";

export function BentoServices() {
  return (
    <section id="services" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            — Nos services
          </p>
          <h2 className="font-serif text-[clamp(2rem,5.5vw,4rem)] font-medium leading-[1.05] text-[var(--ivory)]">
            Une expertise sur mesure,
            <br />
            <span className="text-gradient-luxe">de l'orientation au conseil.</span>
          </h2>
        </Reveal>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5">
          {/* Orientation - large */}
          <Reveal className="sm:col-span-4 sm:row-span-2">
            <TiltCard className="h-full p-7 sm:p-10">
              <div className="flex h-full flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/15 ring-1 ring-[var(--gold)]/30">
                  <GraduationCap className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--gold)]/80">
                  Module 01
                </p>
                <h3 className="mt-2 font-serif text-3xl text-[var(--ivory)] sm:text-4xl">
                  Orientation
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--ivory)]/70 sm:text-base">
                  Coaching personnalisé pour les choix d'études — bilan
                  d'orientation, exploration des filières et construction d'un
                  projet académique solide.
                </p>
                <div className="mt-auto pt-8">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-[var(--gold)]">
                    En savoir plus <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Carrière */}
          <Reveal delay={120} className="sm:col-span-2">
            <TiltCard className="h-full p-6 sm:p-7">
              <div className="flex h-full flex-col">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--mauve)]/20 ring-1 ring-[var(--mauve)]/40">
                  <Briefcase className="h-4 w-4 text-[var(--mauve)]" />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--gold)]/80">
                  Module 02
                </p>
                <h3 className="mt-1 font-serif text-2xl text-[var(--ivory)]">
                  Carrière
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ivory)]/65">
                  CV, entretiens & personal branding.
                </p>
              </div>
            </TiltCard>
          </Reveal>

          {/* Conseil RH */}
          <Reveal delay={180} className="sm:col-span-2">
            <TiltCard className="h-full p-6 sm:p-7">
              <div className="flex h-full flex-col">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gold)]/15 ring-1 ring-[var(--gold)]/30">
                  <Building2 className="h-4 w-4 text-[var(--gold)]" />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--gold)]/80">
                  Entreprises
                </p>
                <h3 className="mt-1 font-serif text-2xl text-[var(--ivory)]">
                  Conseil RH
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ivory)]/65">
                  Audit & stratégie pour entreprises locales.
                </p>
              </div>
            </TiltCard>
          </Reveal>

          {/* Secteurs - full width */}
          <Reveal delay={240} className="sm:col-span-6">
            <TiltCard className="p-7 sm:p-9">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--gold)]">
                    <Sparkles className="h-3.5 w-3.5" /> Secteurs d'activité
                  </div>
                  <h3 className="font-serif text-2xl leading-tight text-[var(--ivory)] sm:text-3xl">
                    Éducation · Recrutement ·{" "}
                    <span className="text-gradient-luxe">Développement Digital</span>
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {["Éducation", "Recrutement", "Digital"].map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[var(--gold)]/30 bg-white/5 px-4 py-2 text-xs font-medium text-[var(--ivory)]/85"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}