import React from "react";
import { Reveal } from "./Reveal";
import { Globe, Cpu, Target, Award, Lightbulb, Heart, Zap, Scale, Shield, MapPin } from "lucide-react";

export const BentoServices: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Services Bento Grid */}
      <div className="relative px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 max-w-4xl text-center">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
              — Nos Services
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] text-[var(--ivory)] mb-6">
              Excellence et
              <br />
              <span className="text-gradient-luxe">innovation.</span>
            </h2>
            <p className="text-lg text-[var(--ivory)]/70 leading-relaxed max-w-2xl mx-auto">
              Découvrez nos services haut de gamme conçus pour révéler votre potentiel et vous accompagner vers l'excellence.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            <Reveal delay={100}>
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500 group-hover:blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl glass-premium p-6 lg:p-7 shadow-xl shadow-[rgba(0,0,0,0.15)] border border-[var(--gold)]/25">
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 lg:h-[16rem]">
                    <div className="flex flex-col justify-between flex-1 order-2 lg:order-1">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500/25 to-fuchsia-500/10 ring-1 ring-fuchsia-400/40">
                            <Globe className="w-5 h-5 text-fuchsia-300" strokeWidth={1.5} />
                          </div>
                          <h3 className="font-bold text-lg text-[var(--ivory)]">Anglais 100% pratique</h3>
                        </div>
                        <p className="text-[var(--ivory)]/80 text-xs lg:text-sm leading-relaxed">
                          Maîtrisez l'anglais professionnel avec une méthode 100% pratique axée sur la communication réelle.
                        </p>
                      </div>
                    </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-violet-500/15 blur-lg opacity-60"></div>
                      <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/15 shadow-lg shadow-black/30">
                        <img src="/images/service-personnel-side.jpg" alt="Anglais 100% pratique" className="w-full h-full object-contain object-center lg:object-cover levitate" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500 group-hover:blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl glass-premium p-6 lg:p-7 shadow-xl shadow-[rgba(0,0,0,0.15)] border border-[var(--gold)]/25">
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 lg:h-[16rem]">
                    <div className="flex flex-col justify-between flex-1 order-2 lg:order-1">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/25 to-amber-500/10 ring-1 ring-amber-400/40">
                            <Cpu className="w-5 h-5 text-amber-300" strokeWidth={1.5} />
                          </div>
                          <h3 className="font-bold text-lg text-[var(--ivory)]">Initiation au numérique</h3>
                        </div>
                        <p className="text-[var(--ivory)]/80 text-xs lg:text-sm leading-relaxed">
                          Découvrez les fondamentaux du numérique et maîtrisez les outils essentiels pour l'ère digitale.
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full h-64 sm:h-72 lg:w-40 lg:h-full flex-shrink-0 order-1 lg:order-2">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/15 blur-lg opacity-60"></div>
                      <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/15 shadow-lg shadow-black/30">
                        <img src="/images/service-numerique-side.jpg" alt="Initiation au numérique" className="w-full h-full object-contain object-center lg:object-cover levitate" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500 group-hover:blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl glass-premium p-6 lg:p-7 shadow-xl shadow-[rgba(0,0,0,0.15)] border border-[var(--gold)]/25">
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 lg:h-[16rem]">
                    <div className="flex flex-col justify-between flex-1 order-2 lg:order-1">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/25 to-purple-500/10 ring-1 ring-purple-400/40">
                            <Target className="w-5 h-5 text-purple-300" strokeWidth={1.5} />
                          </div>
                          <h3 className="font-bold text-lg text-[var(--ivory)]">Développement personnel</h3>
                        </div>
                        <p className="text-[var(--ivory)]/80 text-xs lg:text-sm leading-relaxed">
                          Développez votre potentiel personnel et professionnel pour atteindre vos objectifs avec confiance.
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full h-56 sm:h-64 lg:w-48 lg:h-full flex-shrink-0 lg:pr-2 order-1 lg:order-2">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-violet-500/15 blur-lg opacity-60"></div>
                      <div className="relative h-full w-full rounded-xl border border-white/15 shadow-lg shadow-black/30">
                        <img src="/images/service-anglais-side.jpg" alt="Développement personnel" className="w-full h-full object-contain object-center levitate z-10" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Section Nos Fondements */}
      <div id="fondements" className="relative px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-4xl text-center">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
              — Nos Fondements
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] text-[var(--ivory)] mb-4">
              Les piliers de notre
              <br />
              <span className="text-gradient-luxe">engagement.</span>
            </h2>
          </Reveal>

          <div className="relative mb-16">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 via-purple-500/15 to-amber-500/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-start">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl glass border border-[var(--gold)]/20 p-7 shadow-xl shadow-[rgba(0,0,0,0.12)] group h-full">
                  <div className="absolute inset-0 bg-[var(--gold)]/8 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2 rounded-lg bg-fuchsia-500/20 ring-1.5 ring-fuchsia-400/30">
                        <Target className="w-6 h-6 text-fuchsia-300" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-xl text-[var(--ivory)]">MISSION</h3>
                    </div>
                    <p className="text-xs font-medium text-blue-200/70 mb-3 uppercase tracking-wider">
                      Révéler le potentiel.
                    </p>
                    <p className="text-[var(--ivory)]/85 leading-relaxed text-sm">
                      Accompagner les jeunes dans la découverte de leurs aptitudes et leur fournir les outils concrets pour naviguer vers leur avenir.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="flex justify-center relative group">
                  <div className="relative w-full max-w-xs">
                    <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-b from-blue-600/30 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                    <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
                      <img
                        src="/images/portrait-accueil.jpg"
                        alt="Silhouette Fondements"
                        className="absolute inset-x-0 bottom-0 h-[110%] w-full object-cover object-center group-hover:brightness-110 transition-all duration-500"
                        style={{
                          WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
                          maskImage: 'linear-gradient(to top, black 80%, transparent 100%)'
                        }}
                      />
                    </div>
                    <div className="absolute -left-12 top-1/3 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent rotate-[-20deg] rounded-full blur-md"></div>
                    <div className="absolute -right-12 top-1/3 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent rotate-[20deg] rounded-full blur-md"></div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="relative overflow-hidden rounded-2xl glass border border-[var(--gold)]/20 p-7 shadow-xl shadow-[rgba(0,0,0,0.12)] group h-full">
                  <div className="absolute inset-0 bg-[var(--gold)]/8 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2 rounded-lg bg-amber-500/20 ring-1.5 ring-amber-400/30">
                        <Award className="w-6 h-6 text-amber-300" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-xl text-[var(--ivory)]">VISION</h3>
                    </div>
                    <p className="text-xs font-medium text-amber-200/70 mb-3 uppercase tracking-wider">
                      Transformer l'avenir.
                    </p>
                    <p className="text-[var(--ivory)]/85 leading-relaxed text-sm">
                      Créer un écosystème où chaque individu peut s'épanouir pleinement et contribuer positivement à la société.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="text-center mb-6 mt-10">
            <h3 className="font-serif text-xl lg:text-2xl font-semibold text-[var(--ivory)] mb-2">
              Le cœur de chaque action
            </h3>
            <p className="text-[var(--ivory)]/70 text-xs lg:text-sm max-w-xl mx-auto">
              Nos six valeurs fondamentales qui guident chaque décision et inspirent notre engagement quotidien.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Heart, label: "Engagement Social", color: "text-red-400", bg: "bg-red-500/10", ring: "ring-red-400/30" },
                { icon: Scale, label: "Équité des Chances", color: "text-amber-400", bg: "bg-amber-500/10", ring: "ring-amber-400/30" },
                { icon: Lightbulb, label: "Innovation Pédagogique", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", ring: "ring-fuchsia-400/30" },
                { icon: Shield, label: "Responsabilité", color: "text-violet-400", bg: "bg-violet-500/10", ring: "ring-violet-400/30" },
                { icon: MapPin, label: "Proximité", color: "text-purple-400", bg: "bg-purple-500/10", ring: "ring-purple-400/30" },
                { icon: Zap, label: "Excellence", color: "text-amber-400", bg: "bg-amber-500/10", ring: "ring-amber-400/30" },
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Reveal key={index} delay={index * 100}>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-amber-400 rounded-[24px] blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="relative overflow-hidden rounded-[24px] glass border border-[var(--gold)]/20 p-5 shadow-2xl shadow-[rgba(0,0,0,0.12)]">
                        <div className="flex flex-col items-center text-center">
                          <div className={`p-4 rounded-2xl ${value.bg} ring-2 ${value.ring} mb-4`}>
                            <IconComponent className={`w-8 h-8 ${value.color}`} strokeWidth={1.5} />
                          </div>
                          <h4 className="font-bold text-lg text-[var(--ivory)] mb-2">
                            {value.label}
                          </h4>
                          <p className="text-[var(--ivory)]/70 text-sm leading-relaxed">
                            {index === 0 && "Nous nous engageons à créer un impact positif durable dans la société."}
                            {index === 1 && "Chaque individu mérite une chance équitable de réussir."}
                            {index === 2 && "Nous repoussons les limites de l'apprentissage traditionnel."}
                            {index === 3 && "Nous agissons avec intégrité et transparence dans toutes nos actions."}
                            {index === 4 && "Nous sommes présents et accessibles pour ceux que nous servons."}
                            {index === 5 && "Nous visons la perfection dans tout ce que nous entreprenons."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--gold)]/50"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--gold)]/30"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--gold)]/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
