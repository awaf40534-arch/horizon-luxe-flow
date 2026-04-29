export function Footer() {
  return (
    <footer className="relative px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--mauve)]">
              <span className="absolute inset-[2px] rounded-full bg-[var(--royal-deep)]" />
              <span className="relative font-serif text-sm text-[var(--gold)]">H</span>
            </span>
            <div className="leading-tight">
              <p className="font-serif text-base text-[var(--ivory)]">
                Horizon<span className="text-[var(--gold)]"> · </span>RH
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ivory)]/50">
                Dakar · Sénégal
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