# Horizon RH — Bio-site de luxe

Un bio-site one-page, mobile-first, à l'esthétique "luxury tech" : minimalisme haut de gamme + glassmorphism + bordures lumineuses + typographie magistrale. Pensé pour être ouvert via QR Code et donner l'impression d'ouvrir une application premium.

## Direction artistique

**Palette**
- Bleu Royal profond `#0A1A3F` (fond principal)
- Or brossé `#C9A24B` (accents, bordures lumineuses, CTA)
- Blanc cassé `#F5F1E8` (textes, contrastes)
- Mauve électrique `#8B5CF6` (touches futuristes, dégradés, glow)
- Verre : `rgba(255,255,255,0.06)` + `backdrop-filter: blur(24px)` + bordure 1px or à 20% d'opacité

**Typographie**
- Titres : **Playfair Display** (Serif éditorial, tailles géantes 48-96px sur desktop, 36-56px sur mobile)
- Corps : **Montserrat** (300/400/500/600)
- Hiérarchie marquée, espaces blancs maîtrisés

**Signature visuelle**
- Bordures lumineuses fines (1px dégradé or → mauve)
- Halos / glows doux derrière les éléments clés
- Grain subtil + bruit léger pour casser le plat numérique
- Curseur custom discret sur desktop

## Structure du site

```
┌─────────────────────────────────────┐
│  NAV flottante (glass pill)         │
├─────────────────────────────────────┤
│  HERO                               │
│  — eyebrow "Start-up sociale · SN"  │
│  — Titre géant animé (split text)   │
│  — Sous-titre                       │
│  — CTA flottant magnétique          │
│  — Indicateur scroll                │
├─────────────────────────────────────┤
│  À PROPOS / Description             │
├─────────────────────────────────────┤
│  VISION · MISSION · VALEURS         │
│  3 cartes glass empilées sur mobile │
├─────────────────────────────────────┤
│  STATISTIQUES (compteurs animés)    │
│  Jeunes accompagnés · Entreprises   │
│  · Régions couvertes · Satisfaction │
├─────────────────────────────────────┤
│  SERVICES — BENTO GRID asymétrique  │
│  Orientation · Carrière · Conseil RH│
│  + carte "Secteurs d'activité"      │
├─────────────────────────────────────┤
│  QR CODE — espace dédié stylisé     │
│  QR du site + mini générateur       │
├─────────────────────────────────────┤
│  CONTACT — CTA WhatsApp / IG / Mail │
├─────────────────────────────────────┤
│  FOOTER minimal                     │
└─────────────────────────────────────┘
```

## Sections en détail

**1. Hero**
- Eyebrow : "Sénégal · Start-up sociale"
- Titre : "Éclairer les parcours, révéler les talents." (révélation lettre par lettre)
- CTA "Découvrir Horizon" en pill or brossé, flottant (lévitation lente + glow réactif au curseur, magnétique sur desktop)
- Halo radial mauve/or en arrière-plan, légère parallaxe

**2. À propos**
- Texte officiel : *"Horizon RH est une start-up sociale basée au Sénégal, dédiée à l'accompagnement des jeunes dans leurs transitions scolaires et professionnelles, ainsi qu'au conseil RH innovant."*

**3. Vision · Mission · Valeurs**
- 3 cartes glass avec icônes filaires or
- Vision · Mission · 4 valeurs (Excellence, Innovation Sociale, Proximité, Intégrité) en chips or sur la 3ᵉ carte

**4. Statistiques**
- 4 compteurs animés au scroll (placeholders éditables : ex. 500+ jeunes, 30+ entreprises, 14 régions, 98% satisfaction)
- Chiffres en Playfair géants, libellés Montserrat fins

**5. Services — Bento Grid**
Grille asymétrique 4 cartes, mobile-first (1 col mobile → 6 cols desktop) :
- **Module Orientation** (large) — coaching choix d'études
- **Module Carrière** — CV, entretiens, personal branding
- **Conseil RH** — audit & stratégie entreprises
- **Secteurs** (tall) — Éducation · Recrutement · Développement Digital
Chaque carte : glass, bordure dégradée or→mauve, hover magnétique (tilt 3D léger + glow qui suit le curseur), icône filaire animée.

**6. QR Code**
- Carte glass centrale stylisée
- Affiche le **QR du bio-site** (généré dynamiquement à partir de l'URL courante) — prêt à être screenshotté/imprimé
- Mini générateur en dessous : champ texte/URL → QR personnalisé téléchargeable PNG
- Cadre or brossé avec coins lumineux

**7. Contact**
- 3 boutons glass larges, mobile-friendly (cibles tactiles ≥ 56px) : WhatsApp · Instagram · Email
- Liens en placeholders (`#`) à remplacer plus tard
- Micro-interaction : icône qui s'illumine au tap

**8. Footer**
- Logo wordmark "Horizon RH", mention Sénégal, copyright

## Expérience & micro-interactions

- **Smooth scroll** natif (CSS `scroll-behavior` + offset pour nav)
- **Reveal on scroll** : fade + translate Y sur chaque section (IntersectionObserver)
- **Parallaxe** légère sur les halos/blobs d'arrière-plan
- **CTA magnétique** : le bouton hero suit subtilement le curseur dans un rayon de 80px (desktop only)
- **Hover cards Bento** : tilt 3D + spotlight radial qui suit le curseur, désactivé en tactile
- **Compteurs animés** déclenchés à l'entrée dans le viewport
- **Respect `prefers-reduced-motion`** : animations désactivées proprement

## Mobile-first (priorité absolue)

- Conçu d'abord pour 375-430px (ouverture QR)
- Nav transformée en pill compacte flottante en bas (thumb-zone)
- Bento → 1 colonne empilée avec hauteurs variables conservées pour garder le rythme
- Tous les CTA ≥ 56px de hauteur
- Typographies fluides (`clamp()`)
- Performance : pas d'images lourdes, dégradés CSS et SVG uniquement

## Détails techniques

- **TanStack Start**, route unique `src/routes/index.tsx` remplaçant le placeholder
- Composants découpés dans `src/components/horizon/` : `Nav`, `Hero`, `About`, `Pillars`, `Stats`, `BentoServices`, `QRSection`, `Contact`, `Footer`, plus primitives `GlassCard`, `MagneticButton`, `Reveal`, `Counter`
- Polices via Google Fonts (Playfair Display + Montserrat) chargées dans `__root.tsx` (`<link>` preconnect + stylesheet)
- Tokens couleurs ajoutés à `src/styles.css` (variables `--royal`, `--gold`, `--ivory`, `--mauve`) + utilitaires glass
- Animations : Tailwind keyframes existants (`fade-in`, `scale-in`) + keyframes custom (`float`, `shimmer`, `glow`)
- QR Code : librairie `qrcode` (pure JS, edge-compatible) générée côté client dans un `<canvas>` ; téléchargement via `toDataURL`
- Magnetic / tilt : implémentation maison légère avec `mousemove` + `requestAnimationFrame`, désactivée si `pointer: coarse` ou `prefers-reduced-motion`
- SEO : `head()` de la route avec title "Horizon RH — Éclairer les parcours, révéler les talents", description, og:title/description, og:image (généré ou laissé vide pour ajout ultérieur)
- Aucune dépendance Node-only ; tout tourne sur l'edge runtime

## Livraison

Site complet, fonctionnel, prêt à être publié et partagé via QR Code. Les coordonnées de contact restent en placeholders (`#`) — tu les remplaceras directement dans le composant `Contact`. Les chiffres de la section Statistiques sont également éditables en un point unique.