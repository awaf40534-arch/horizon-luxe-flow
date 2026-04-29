import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { value: 500, suffix: "+", label: "Jeunes accompagnés" },
  { value: 30, suffix: "+", label: "Entreprises partenaires" },
  { value: 14, suffix: "", label: "Régions couvertes" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

export function Stats() {
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass border-luxe relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-12 sm:py-14">
            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-x-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-none text-gradient-luxe">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--ivory)]/65">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}