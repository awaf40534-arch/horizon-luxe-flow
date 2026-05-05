import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as
      | "dark"
      | "light"
      | null;
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    localStorage.setItem("theme", next);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
      className="glass-strong fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] shadow-lg transition-colors hover:bg-[var(--gold)]/10"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
    <header
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "scale-95" : "scale-100"
      }`}
    >
      <nav className="glass-strong flex items-center gap-2 rounded-full border border-[var(--gold)]/25 px-3 py-2 sm:px-4 sm:gap-4">
        <a href="#top" className="flex items-center gap-2 px-2">
          <img
            src="/images/horizon-logo.png"
            alt="Horizon RH"
            className="h-7 w-7 rounded-full"
          />
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
    </>
  );
}