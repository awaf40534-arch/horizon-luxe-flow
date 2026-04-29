import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  href,
  strength = 0.35,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 min-h-[56px]",
    "font-sans text-sm font-medium tracking-wider uppercase",
    "text-[var(--royal-deep)] bg-[var(--gold)]",
    "transition-[transform,box-shadow] duration-300 ease-out will-change-transform",
    "shadow-[0_10px_40px_-10px_oklch(0.78_0.13_85/0.6)] hover:shadow-[0_20px_60px_-15px_oklch(0.78_0.13_85/0.8)]",
    "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[var(--gold)] before:via-[var(--gold-soft)] before:to-[var(--mauve)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10",
    className,
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={classes}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={classes}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}