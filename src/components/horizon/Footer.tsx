export function Footer() {
  return (
    <footer className="relative px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.25em] text-[var(--ivory)]/50">
          <span>Secteurs</span>
          <span className="h-1 w-1 rounded-full bg-[var(--gold)]/50" />
          <span>Éducation</span>
          <span className="h-1 w-1 rounded-full bg-[var(--gold)]/50" />
          <span>Développement personnel</span>
          <span className="h-1 w-1 rounded-full bg-[var(--gold)]/50" />
          <span>Inclusion sociale</span>
          <span className="h-1 w-1 rounded-full bg-[var(--gold)]/50" />
          <span>Ressources humaines</span>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/images/horizon-logo.png"
              alt="Horizon RH"
              className="h-8 w-8 rounded-full"
            />
            <div className="leading-tight">
              <p className="font-serif text-base text-[var(--ivory)]">
                Horizon<span className="text-[var(--gold)]"> · </span>RH
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ivory)]/50">
                Saint-Louis · Sénégal
              </p>
            </div>
          </div>
          <p className="text-xs text-[var(--ivory)]/45">
            © {new Date().getFullYear()} Horizon RH. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}