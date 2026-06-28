# ESTADO — Estells Centre d'Estudis

> Última actualización: 2026-06-27

## Idea / Contexto
Centro de estudios en **Alginet (Valencia)**. Apoyo educativo cercano, de confianza y personalizado para **ESO y Bachillerato**: clases de refuerzo, técnicas de estudio e idiomas. También cesión de aulas.
- Tagline: **"Donde el aprendizaje cobra vida"**
- Concepto logo: bombilla + rayos sol + punta de lápiz.

## Estado actual
**Revamp premium completo hecho y compilando.** Se refactorizó la landing monolítica a arquitectura por módulos (`components/`, `hooks/`, `i18n/`), se añadieron secciones nuevas (Ventajas, Proceso, FAQ, Reserva), bilingüe ES/Valencià con selector, motion al scroll, SEO local y mejoras de rendimiento. `npm run build` OK.

## Stack
- React 18 + TypeScript + Vite (v8)
- Tailwind 3.4 con tokens de marca en `tailwind.config.js` (colors ink/sand/gold/coral/line/muted + fontFamily heading/body/mono)
- `shaders` v2.5 (`shaders/react`) — hero dorado, **lazy-loaded** (`React.lazy` + `Suspense`)
- `lucide-react` — Instagram NO existe → SVG inline (footer + WhatsApp)
- Fuentes Google: Bricolage Grotesque (heading) · Crimson Pro (body serif) · JetBrains Mono (labels/números)
- i18n propio: React Context + dictionaries, persistencia `localStorage`, `<html lang>` dinámico

## Arquitectura (src/)
- `i18n/dictionaries.ts` — TODO el copy ES + VA, `TEAM_NAMES`. `i18n/I18nProvider.tsx` — `useI18n()` → `{lang,setLang,toggle,t}`.
- `hooks/` — `useAlginetTime`, `useInView` (scroll reveal, once, respeta reduced-motion), `useScrollState`, `useScrollSpy`.
- `components/ui/primitives.tsx` — `EASE`, `TextRoll`, `GoldButton`, `GhostButton`, `Logo`, `SectionBadge`, `LangSwitch`. `ui/Reveal.tsx` — wrapper fade+lift con stagger.
- `components/` — `Navbar`, `MobileMenu` (focus trap + Esc), `Hero`, `About` (+Equipo), `Advantages`, `Process`, `Services`, `Faq`, `Reserva`, `Footer`, `ShaderBackground`.
- `App.tsx` — composición + skip-link. `main.tsx` — envuelto en `I18nProvider`.

## Secciones (orden)
Hero `#inicio` → About/Equipo `#centro`/`#equipo` (1) → Ventajas `#ventajas` (2) → Proceso `#proceso` (3) → Servicios `#servicios` (4) → FAQ `#faq` (5) → **Reseñas Google `#resenas` (6)** → Reserva `#contacto` (7) → Footer.

## Reseñas (Google)
Carrusel auto-rotativo (6s) adaptado a marca — **sin framer-motion/shadcn/radix** (reescrito con tokens propios + Reveal). Datos reales en `src/data/reviews.ts` (`REVIEWS` array, **vacío con TODO**: pegar reseñas literales de Google, no inventar). Si vacío, muestra empty-state con CTA. Marca Google "G" en SVG inline + estrellas doradas. CTAs a ficha Google (`GOOGLE_REVIEWS_URL`) y escribir reseña (`GOOGLE_WRITE_REVIEW_URL`) — ambos **placeholder TODO** (faltan URL/place_id reales).

## Formulario (Reserva)
Solo front-end. **Selector de intención** (segmented): "Reserva tu plaza" / "Contacta con nosotros" — cambia título, subtítulo, asunto del mail y campos (en modo contacto se ocultan edad/asignatura/nivel/fecha; solo nombre/teléfono/email obligatorios). Validación nativa (`checkValidity`/`reportValidity`), estados idle/sending/success, `aria-live`. Al enviar abre `mailto:estellscentre@gmail.com` con cuerpo prerrellenado. **Sin backend real.** Icono WhatsApp en verde marca (#25D366).

## Cambios recientes (2026-06-28)
- Quitado **horario y ubicación**: reloj live de navbar/menú móvil, bloque de horario, mapa y dirección del footer, chip de horario del hero. Footer ahora: contacto (tel/email/IG) + nav rápida.
- **Sobre Estells**: nueva distribución de imágenes (grid 12-col, retrato director elevado + coworking en escalón, texto centrado).
- **Cómo empezar**: animación añadida — punto dorado que viaja por el conector (`@keyframes flow-dot`, oculto en reduced-motion) + hover lift dorado en los números.

## SEO / A11y
- `index.html`: OG/Twitter, theme-color, canonical, **JSON-LD `EducationalOrganization`** (dirección, openingHours L-V 16:00-20:30, areaServed, sameAs IG).
- Skip-link, focus-visible rings, `scroll-margin-top: 88px`, smooth scroll (off en reduced-motion).

## Rendimiento
- Shader lazy → fuera del bundle inicial. Build: initial JS 243KB (75KB gzip) + CSS 24KB; ShaderBackground chunk aparte 1.34MB (361KB gzip) cargado async.
- `coworking-1.jpg` optimizada 2.1MB → **316KB** (1600×900, q62). `width/height` en imgs (anti-CLS) + `loading="lazy"` below-fold.

## Assets
`public/images/`: logo.png, coworking-1.jpg (optimizada), team/{frances-mari,lara,ricard,virginia,salva}.jpg. Original sin comprimir respaldada en `/tmp/coworking-1.orig.jpg` (temporal).

## Pendientes
- [ ] **Verificar visualmente en navegador** a 360/390/768/1280/1536 px (shader WebGL, reveals, acordeón, form, mobile menu) — no comprobable headless.
- [ ] **Teléfono real** (placeholder `+34 600 000 000`, marcado `// TODO`). Confirmar también dirección/CP exactos y URL real de Instagram.
- [ ] **Backend del formulario** (Formspree/Resend) — ahora solo front-end + mailto.
- [ ] Despliegue (Vercel).
- [ ] Opcional: servir imágenes en WebP/AVIF con `<picture>`.
