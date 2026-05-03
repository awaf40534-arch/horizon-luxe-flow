import { GraduationCap, Users, Code2 } from "lucide-react";
import { Reveal } from "./Reveal";

const sectors = [
  { icon: GraduationCap, label: "Éducation" },
  { icon: Users, label: "Recrutement" },
  { icon: Code2, label: "Développement Digital" },
];

export function Sectors() {
  return (
    <section className="relative px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass border-luxe relative overflow-hidden rounded-[32px] px-6 py-8 sm:px-12 sm:py-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
            <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
              — Secteurs d'activité
            </p>
            <ul className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
              {sectors.map((s, i) => (
                <li key={s.label} className="flex items-center gap-6 sm:gap-12">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gold)]/10 ring-1 ring-[var(--gold)]/30">
                      <s.icon className="h-4 w-4 text-[var(--gold)]" strokeWidth={1.5} />
                    </span>
                    <span className="font-serif text-lg text-[var(--ivory)] sm:text-xl">
                      {s.label}
                    </span>
                  </div>
                  {i < sectors.length - 1 && (
                    <span className="hidden h-1 w-1 rounded-full bg-[var(--gold)]/60 sm:block" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}