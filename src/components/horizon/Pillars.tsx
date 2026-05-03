import { Compass, Target, Gem } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Compass,
    label: "Vision",
    body: "Devenir le levier de réussite de la jeunesse africaine.",
  },
  {
    icon: Target,
    label: "Mission",
    body: "Éclairer les parcours académiques et optimiser le capital humain des entreprises.",
  },
  {
    icon: Gem,
    label: "Valeurs",
    body: "Quatre principes guident chacune de nos actions.",
    chips: ["Excellence", "Innovation Sociale", "Proximité", "Intégrité"],
  },
];

export function Pillars() {
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            — Notre cap
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-medium leading-tight text-[var(--ivory)]">
            Vision · Mission · Valeurs
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 120}>
              <article className="glass border-luxe relative h-full overflow-hidden rounded-3xl p-7 sm:p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--mauve)]/20 ring-1 ring-[var(--gold)]/30">
                  <p.icon className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="font-serif text-2xl text-[var(--ivory)]">
                  {p.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ivory)]/70">
                  {p.body}
                </p>
                {p.chips && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.chips.map((c) => (
                      <li
                        key={c}
                        className="rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 px-3 py-1 text-[11px] font-medium tracking-wide text-[var(--gold)]"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}