import { Scene3D } from "./Scene3D";
import { Reveal } from "./Reveal";

export function HumanShowcase() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl text-center sm:mx-auto sm:mb-14">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            — L'humain au centre
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,4.8vw,3.2rem)] font-medium leading-[1.1] text-[var(--ivory)]">
            Trois trajectoires,
            <br />
            <span className="text-gradient-luxe">un même horizon.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass border-luxe relative overflow-hidden rounded-[32px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--royal-deep)_85%)]" />
            <Scene3D
              variant="showcase"
              className="relative h-[420px] w-full sm:h-[520px]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-8">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 text-center">
                <span className="font-serif text-sm text-[var(--ivory)]/70 sm:text-base">
                  Étudiants
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--gold)]/60" />
                <span className="font-serif text-sm text-[var(--ivory)]/70 sm:text-base">
                  Professionnels
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--gold)]/60" />
                <span className="font-serif text-sm text-[var(--ivory)]/70 sm:text-base">
                  Entreprises
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}