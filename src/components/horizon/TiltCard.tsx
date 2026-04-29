import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotX = (0.5 - y) * 8;
    const rotY = (x - 0.5) * 8;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative overflow-hidden rounded-3xl glass border-luxe transition-transform duration-300 ease-out will-change-transform",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500",
        "after:bg-[radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),oklch(0.78_0.13_85/0.18),transparent_60%)]",
        className,
      )}
    >
      {children}
    </div>
  );
}