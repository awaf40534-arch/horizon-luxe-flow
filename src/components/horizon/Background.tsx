export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-[var(--mauve)] opacity-20 blur-[140px] animate-[glow_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-[var(--gold)] opacity-15 blur-[140px] animate-[glow_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-1/4 h-[32rem] w-[32rem] rounded-full bg-[var(--royal)] opacity-40 blur-[120px]" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}