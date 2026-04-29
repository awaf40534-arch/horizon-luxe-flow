import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "scale-95" : "scale-100"
      }`}
    >
      <nav className="glass-strong flex items-center gap-2 rounded-full border border-[var(--gold)]/25 px-3 py-2 sm:px-4 sm:gap-4">
        <a href="#top" className="flex items-center gap-2 px-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--mauve)]">
            <span className="absolute inset-[2px] rounded-full bg-[var(--royal-deep)]" />
            <span className="relative font-serif text-sm text-[var(--gold)]">H</span>
          </span>
          <span className="hidden font-serif text-sm tracking-wider text-[var(--ivory)] sm:block">
            Horizon<span className="text-[var(--gold)]">·</span>RH
          </span>
        </a>
        <span className="h-4 w-px bg-[var(--gold)]/20" />
        <ul className="flex items-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-xs font-medium tracking-wide text-[var(--ivory)]/80 transition-colors hover:text-[var(--gold)] sm:text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}