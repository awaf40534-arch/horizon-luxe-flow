import { MessageCircle, Instagram, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    hint: "+221 788 734 378",
    href: "https://wa.me/221788734378",
    accent: "from-[#25D366]/30 to-[var(--gold)]/20",
  },
  {
    icon: Instagram,
    label: "Instagram",
    hint: "@horizon__rh",
    href: "https://www.instagram.com/horizon__rh?igsh=cjgzNng4OW42eXo5&utm_source=qr",
    accent: "from-[var(--mauve)]/30 to-[var(--gold)]/20",
  },
  {
    icon: Mail,
    label: "Email",
    hint: "rhhorizon85@gmail.com",
    href: "mailto:rhhorizon85@gmail.com",
    accent: "from-[var(--gold)]/30 to-[var(--mauve)]/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    hint: "Horizon RH",
    href: "#",
    accent: "from-[#0A66C2]/30 to-[var(--gold)]/20",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-3xl text-center mx-auto">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            — Échanger
          </p>
          <h2 className="font-serif text-[clamp(2rem,5.5vw,4rem)] font-medium leading-[1.05] text-[var(--ivory)]">
            Construisons votre
            <br />
            <span className="text-gradient-luxe">prochain horizon.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full overflow-hidden rounded-3xl glass border-luxe p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/15 ring-1 ring-[var(--gold)]/30">
                    <c.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-[var(--ivory)]">{c.label}</h3>
                  <p className="mt-2 text-sm text-[var(--ivory)]/70">{c.hint}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[11px] font-medium uppercase tracking-widest text-[var(--gold)]">
                    Contacter <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
