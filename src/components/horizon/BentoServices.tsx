import {
  GraduationCap,
  Building2,
  Briefcase,
  Cpu,
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
            <span className="text-gradient-luxe">de l'orientation au digital.</span>
          </h2>
        </Reveal>

        <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-5 sm:grid-cols-6">
          {/* Orientation - Large hero card */}
          <Reveal className="sm:col-span-4 sm:row-span-2">
            <TiltCard className="h-full rounded-[32px] p-8 sm:p-12">
              <div className="flex h-full flex-col">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gold)]/15 ring-1 ring-[var(--gold)]/30">
                  <GraduationCap className="h-6 w-6 text-[var(--gold)]" strokeWidth={1.5} />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]/80">
                  Phare
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-[1.1] text-[var(--ivory)] sm:text-5xl">
                  Orientation Scolaire
                  <br />
                  <span className="text-gradient-luxe">& Transition</span>
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--ivory)]/70 sm:text-base">
                  Coaching personnalisé pour aider les élèves et étudiants à
                  trouver leur voie au Sénégal et à l'international. Bilans,
                  exploration des filières, construction d'un projet d'avenir.
                </p>
                <div className="mt-auto pt-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-[var(--gold)]">
                    Découvrir <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Conseil RH */}
          <Reveal delay={120} className="sm:col-span-2">
            <TiltCard className="h-full rounded-[32px] p-7">
              <div className="flex h-full flex-col">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--mauve)]/20 ring-1 ring-[var(--mauve)]/40">
                  <Building2 className="h-5 w-5 text-[var(--mauve)]" strokeWidth={1.5} />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]/80">
                  Entreprises
                </p>
                <h3 className="mt-1.5 font-serif text-2xl leading-tight text-[var(--ivory)]">
                  Conseil RH & Stratégie
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[var(--ivory)]/65">
                  Accompagnement des entreprises pour optimiser leur capital
                  humain et leur culture d'organisation.
                </p>
              </div>
            </TiltCard>
          </Reveal>

          {/* Insertion Pro */}
          <Reveal delay={180} className="sm:col-span-2">
            <TiltCard className="h-full rounded-[32px] p-7">
              <div className="flex h-full flex-col">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/15 ring-1 ring-[var(--gold)]/30">
                  <Briefcase className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]/80">
                  Carrière
                </p>
                <h3 className="mt-1.5 font-serif text-2xl leading-tight text-[var(--ivory)]">
                  Insertion Professionnelle
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[var(--ivory)]/65">
                  Ateliers CV, préparation aux entretiens & techniques de
                  Personal Branding.
                </p>
              </div>
            </TiltCard>
          </Reveal>

          {/* Digital RH - wide */}
          <Reveal delay={240} className="sm:col-span-6">
            <TiltCard className="rounded-[32px] p-7 sm:p-10">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--mauve)]/20 ring-1 ring-[var(--gold)]/30">
                    <Cpu className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]/80">
                      Innovation
                    </p>
                    <h3 className="mt-1.5 font-serif text-2xl leading-tight text-[var(--ivory)] sm:text-3xl">
                      Digital <span className="text-gradient-luxe">RH</span>
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--ivory)]/65">
                      Solutions numériques pour moderniser les processus de
                      recrutement et de gestion.
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 self-end text-xs font-medium tracking-widest uppercase text-[var(--gold)] sm:self-auto">
                  Explorer <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
