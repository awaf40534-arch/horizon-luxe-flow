import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Download, QrCode, Link2 } from "lucide-react";
import { Reveal } from "./Reveal";

const QR_OPTS = {
  margin: 1,
  width: 520,
  color: { dark: "#0A1024", light: "#F5F1E8" },
  errorCorrectionLevel: "H" as const,
};

export function QRSection() {
  const siteCanvas = useRef<HTMLCanvasElement>(null);
  const customCanvas = useRef<HTMLCanvasElement>(null);
  const [siteUrl, setSiteUrl] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const url = typeof window !== "undefined" ? window.location.origin + "/" : "";
    setSiteUrl(url);
    if (siteCanvas.current && url) {
      QRCode.toCanvas(siteCanvas.current, url, QR_OPTS).catch(() => {});
    }
  }, []);

  const generate = () => {
    if (!customCanvas.current || !input.trim()) return;
    QRCode.toCanvas(customCanvas.current, input.trim(), QR_OPTS).catch(() => {});
  };

  const download = (canvas: HTMLCanvasElement | null, name: string) => {
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = name;
    a.click();
  };

  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            — Connexion
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-medium leading-tight text-[var(--ivory)]">
            Scannez. <span className="text-gradient-luxe">Partagez.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Site QR */}
          <Reveal>
            <div className="glass border-luxe relative h-full rounded-3xl p-7 sm:p-8">
              <div className="mb-5 flex items-center gap-2 text-[var(--gold)]">
                <QrCode className="h-4 w-4" />
                <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
                  QR du bio-site
                </span>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-[280px]">
                {/* Decorative corner glows */}
                <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-br from-[var(--gold)]/30 to-[var(--mauve)]/30 opacity-60 blur-xl" />
                <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-[var(--ivory)] p-3">
                  <canvas
                    ref={siteCanvas}
                    className="h-full w-full rounded-md"
                    aria-label="QR Code du site Horizon RH"
                  />
                </div>
              </div>
              <p className="mt-5 truncate text-center text-xs text-[var(--ivory)]/55">
                {siteUrl || "—"}
              </p>
              <button
                onClick={() => download(siteCanvas.current, "horizon-rh-qr.png")}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--gold)]/40 bg-white/5 px-5 py-3 text-xs font-medium uppercase tracking-wider text-[var(--ivory)] transition-colors hover:bg-[var(--gold)]/10"
              >
                <Download className="h-3.5 w-3.5" /> Télécharger
              </button>
            </div>
          </Reveal>

          {/* Custom generator */}
          <Reveal delay={150}>
            <div className="glass border-luxe relative h-full rounded-3xl p-7 sm:p-8">
              <div className="mb-5 flex items-center gap-2 text-[var(--gold)]">
                <Link2 className="h-4 w-4" />
                <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
                  Générateur personnalisé
                </span>
              </div>
              <label className="block">
                <span className="text-xs text-[var(--ivory)]/65">
                  URL ou texte
                </span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && generate()}
                  placeholder="https://exemple.com"
                  className="mt-2 w-full rounded-xl border border-[var(--gold)]/25 bg-white/5 px-4 py-3 text-sm text-[var(--ivory)] placeholder:text-[var(--ivory)]/40 outline-none transition-colors focus:border-[var(--gold)]/60"
                />
              </label>
              <button
                onClick={generate}
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[var(--gold)] px-5 py-3 text-xs font-medium uppercase tracking-wider text-[var(--royal-deep)] transition-transform hover:scale-[1.02]"
              >
                Générer
              </button>
              <div className="mt-6 flex aspect-square w-full max-w-[220px] items-center justify-center rounded-2xl border border-dashed border-[var(--gold)]/25 bg-white/5 p-3 mx-auto">
                <canvas
                  ref={customCanvas}
                  className="h-full w-full rounded-md"
                  aria-label="QR Code généré"
                />
              </div>
              <button
                onClick={() => download(customCanvas.current, "qr-personnalise.png")}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--gold)]/40 bg-white/5 px-5 py-3 text-xs font-medium uppercase tracking-wider text-[var(--ivory)] transition-colors hover:bg-[var(--gold)]/10"
              >
                <Download className="h-3.5 w-3.5" /> Télécharger
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}