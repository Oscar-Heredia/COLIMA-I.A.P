---
version: alpha
name: "Tanatología y Psicología Colima I.A.P."
description: "Sistema institucional morado y dorado para un archivo vivo de acompañamiento."
colors:
  purple-950: "#32102d"
  purple-900: "#47143e"
  purple-800: "#5b184f"
  purple-700: "#702060"
  purple-100: "#f0e4ed"
  gold-500: "#e9b934"
  gold-300: "#f4d77e"
  gold-100: "#fff4ce"
  ink: "#211b20"
  muted: "#655c63"
  paper: "#fbfaf8"
  paper-dark: "#f1eee9"
  white: "#ffffff"
  line: "rgba(50, 16, 45, 0.18)"
typography:
  display:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "clamp(2.75rem, 7vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 660
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)"
    fontWeight: 620
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  lead:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1
  action-link:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.65
  nav-mobile:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "1.05rem"
    fontWeight: 550
    lineHeight: 1.65
  nav-desktop:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "clamp(0.78rem, 1.2vw, 0.9rem)"
    fontWeight: 550
    lineHeight: 1.65
  caption:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.5
  brand-caption-mobile:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.15
  brand-caption-desktop:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.15
  section-lead:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "clamp(1rem, 2vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.65
  archive-lead:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "clamp(1rem, 2vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.65
  archive-year:
    fontFamily: '"Commissioner", "Trebuchet MS", sans-serif'
    fontSize: "clamp(5rem, 18vw, 12rem)"
    fontWeight: 750
    lineHeight: 0.75
    letterSpacing: "-0.06em"
rounded:
  small: "0.75rem"
  large: "1.5rem"
spacing:
  page-gutter: "clamp(1rem, 4vw, 3rem)"
  section-space: "clamp(5rem, 10vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.gold-500}"
    textColor: "{colors.purple-950}"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: "0.85rem 1.3rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-300}"
  button-contact:
    backgroundColor: "{colors.gold-500}"
    textColor: "{colors.purple-950}"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: "0.85rem 1.3rem"
  button-contact-hover:
    backgroundColor: "{colors.white}"
  text-link:
    textColor: "{colors.purple-800}"
    typography: "{typography.action-link}"
  text-link-light:
    textColor: "{colors.gold-300}"
    typography: "{typography.action-link}"
  navigation:
    backgroundColor: "{colors.purple-900}"
    textColor: "{colors.white}"
    typography: "{typography.nav-mobile}"
    height: "4.5rem"
  navigation-desktop:
    typography: "{typography.nav-desktop}"
    height: "5rem"
  service-featured:
    backgroundColor: "{colors.paper-dark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.large}"
    padding: "clamp(1.5rem, 4vw, 2.5rem)"
  service-purple:
    backgroundColor: "{colors.purple-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.large}"
    padding: "clamp(1.5rem, 4vw, 2.5rem)"
  service-gold:
    backgroundColor: "{colors.gold-100}"
    textColor: "{colors.purple-950}"
    rounded: "{rounded.large}"
    padding: "clamp(1.5rem, 4vw, 2.5rem)"
  team-roster-item:
    backgroundColor: "{colors.paper-dark}"
    textColor: "{colors.ink}"
  archive-photo:
    backgroundColor: "{colors.paper-dark}"
    rounded: "{rounded.small}"
---

# Design System: Tanatología y Psicología Colima I.A.P.

## Overview

**Creative North Star: "El archivo vivo de acompañamiento"**

El sistema convierte la identidad morada y dorada existente en un archivo institucional que se siente activo, humano y verificable. Campos ciruela y morado sostienen la voz institucional; reglas y acciones doradas orientan sin convertir el sitio en una campaña comercial.

La composición es editorial y espaciosa. Commissioner aporta continuidad entre titulares, lectura y controles, mientras la fotografía documental conserva la presencia real de personas, servicios y memoria institucional. El resultado es sereno y establecido, nunca clínico, funerario ni comercialmente urgente.

El movimiento prolonga la metáfora del archivo vivo: titulares, fotografías y capítulos se descubren mediante recortes y desplazamientos breves, como material documental que entra al campo de lectura. Cada secuencia ocurre una sola vez y nunca retrasa una acción.

**Key Characteristics:**
- Campos morados inmersivos sobre una base de papel cálido.
- Oro preciso para acción, orientación y separación.
- Una sola familia Commissioner con escala y peso variables.
- Fotografía real recortada en marcos editoriales, no usada como adorno.
- Contenedores tonales y profundidad reservada para elementos prioritarios.
- Movimiento de máscaras con deceleración natural y fallback completamente estático.

## Colors

La paleta alterna campos institucionales profundos con papeles cálidos; el oro actúa como señal, no como decoración continua.

### Primary
- **Ciruela archivo** (`purple-950`): fondo institucional más profundo para bloques de identidad y pie de página.
- **Ciruela institucional** (`purple-900`): navegación, contenedores oscuros y estados de cabecera.
- **Morado institucional** (`purple-800`): campos principales de marca y enfoque visible sobre superficies claras.
- **Violeta activo** (`purple-700`): acentos tipográficos de gran escala.
- **Lavanda velada** (`purple-100`): respaldo suave detrás de retratos e imágenes.

### Secondary
- **Oro señal** (`gold-500`): acciones principales y reglas de énfasis.
- **Oro suave** (`gold-300`): hover, enlaces y texto de apoyo sobre morado.
- **Oro papel** (`gold-100`): contención tonal clara para un servicio destacado por categoría.

### Neutral
- **Tinta ciruela** (`ink`): texto principal sobre papel.
- **Texto ceniza** (`muted`): descripciones y metadatos secundarios.
- **Papel marfil** (`paper`): superficie base.
- **Papel mineral** (`paper-dark`): superficie alterna y fondo del roster.
- **Blanco** (`white`): texto de máximo contraste y hover puntual.
- **Línea ciruela** (`line`): divisores discretos del roster y otros listados.

### Named Rules
**The Gold Precision Rule.** El oro saturado se reserva para acciones, enlaces y reglas finas; solo su tinte pálido puede ocupar un contenedor amplio.

**The Purple Field Rule.** El morado profundo puede cubrir secciones completas, siempre con texto blanco o dorado de contraste probado.

## Typography

**Display Font:** Commissioner (with Trebuchet MS and sans-serif fallbacks)
**Body Font:** Commissioner (with Trebuchet MS and sans-serif fallbacks)
**Label Font:** Commissioner (with Trebuchet MS and sans-serif fallbacks)

**Character:** La familia variable única mantiene una voz humanista, contemporánea e institucional. La jerarquía nace de escala fluida, pesos entre 400 y 750 y tracking negativo en títulos, no de mezclar familias.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 7vw, 5.75rem)`, 1.05): titulares principales breves, con un ancho cercano a 11 caracteres.
- **Headline** (660, `clamp(2.25rem, 5vw, 4.5rem)`, 1.05): encabezados editoriales de sección.
- **Title** (620, `clamp(1.3rem, 2.2vw, 1.75rem)`, 1.05): servicios, principios y nombres del equipo.
- **Lead** (400, `clamp(1.05rem, 2.2vw, 1.3rem)`, 1.55): introducciones de alto énfasis.
- **Body** (400, `1rem`, 1.65): lectura general; los bloques se mantienen entre 40 y 64ch.
- **Label** (700, `0.95rem`, 1): botones principales; los enlaces de acción conservan el tamaño de cuerpo y navegación usa pesos 550-650.
- **Archive Year** (750, `clamp(5rem, 18vw, 12rem)`, 0.75): marcador documental de gran escala y tracking compacto.

### Named Rules
**The One-Family Rule.** Toda la interfaz usa Commissioner; la diferenciación proviene de peso, escala, medida y tracking, nunca de una segunda tipografía decorativa.

## Layout

El sistema es mobile-first y usa un contenedor centrado de hasta `76rem`, margen lateral fluido (`page-gutter`) y separación vertical amplia (`section-space`). Las composiciones comienzan en una columna; los vacíos grandes separan capítulos y los gaps internos se mantienen compactos, normalmente entre `0.75rem` y `1rem`.

- **Hasta 24rem:** se oculta la segunda línea de marca, las acciones principales se apilan y el roster reduce retratos a `4.75rem x 6rem`.
- **Desde 40rem:** servicios, roster y archivo pasan a dos columnas; el servicio principal y la fotografía líder abarcan ambas. El pie usa tres columnas.
- **Desde 52rem:** la cabecera crece a `5rem`, aparece la navegación horizontal y hero, institución y contacto adoptan composiciones de dos columnas.
- **Desde 68rem:** servicios usan una composición asimétrica, el roster pasa a tres columnas y el archivo se convierte en una retícula de 12 columnas con piezas de distinta escala.

## Elevation & Depth

La profundidad combina campos tonales, recorte fotográfico y pocas sombras ciruela. Los contenedores de servicio, roster y archivo permanecen planos; la elevación queda reservada para marcos de evidencia, acciones prioritarias y la cabecera cuando se separa del contenido al hacer scroll.

### Shadow Vocabulary
- **Marco ambiental** (`0 24px 60px rgba(50, 16, 45, 0.15)`): fotografía principal y mapa.
- **Cabecera elevada** (`0 12px 30px rgba(50, 16, 45, 0.22)`): estado de cabecera tras abandonar el inicio.
- **Acción** (`0 12px 30px rgba(22, 4, 19, 0.18)`): botón dorado principal.
- **Acción sobre morado** (`0 14px 32px rgba(30, 5, 26, 0.28)`): llamada final sobre campo institucional.

### Named Rules
**The Evidence Lift Rule.** La sombra ciruela pertenece a fotografía, mapa y acciones prioritarias; no se aplica a cada bloque de contenido.

## Shapes

La forma se apoya en dos radios suavemente rectangulares: `small` para botones, menú, retratos y fotografías del archivo; `large` para servicios, fotografía principal y mapa. Las imágenes se recortan al borde del contenedor con `overflow: hidden`; líneas de 1px crean estructura sin fabricar más cajas.

### Named Rules
**The Two-Radius Rule.** Usa únicamente los radios pequeño y grande del sistema; no conviertas botones, retratos o contenedores en píldoras o círculos.

## Components

### Buttons
- **Shape:** rectángulo suavemente redondeado (`small`), altura mínima de `3rem` y padding `0.85rem 1.3rem`.
- **Primary:** oro señal sobre texto ciruela, peso 700 y sombra de acción.
- **Contact:** comparte el estado base del primario y cambia a blanco en hover.
- **Hover / Focus / Active:** sube `2px` en hover, baja `1px` al activar y usa outline de `3px` con offset de `4px`; el foco es dorado dentro de campos morados.

### Text Links
- **Style:** enlace subrayado de peso 700 y altura mínima de `2.75rem`, morado sobre papel o dorado/blanco sobre campos oscuros.
- **Behavior:** la flecha final avanza `0.25rem` en hover; el texto no se convierte en botón contorneado.

### Navigation
- **Desktop:** cabecera sticky ciruela de `5rem`, enlaces compactos y una regla dorada animada para hover y sección actual; la acción de apoyo permanece dorada.
- **Mobile:** cabecera de `4.5rem`, botón de menú contorneado y panel vertical fijo bajo la cabecera. El panel revela con opacidad y desplazamiento en `220ms`; el icono cambia de tres líneas a cierre.
- **State:** al hacer scroll, la cabecera conserva el color y suma opacidad y sombra; `aria-current` usa oro.

### Service Containers
- **Form:** contenedores grandes (`large`) sin borde ni sombra, con imagen recortada y contenido interno fluido.
- **Variants:** papel mineral para el servicio principal, ciruela con texto claro y oro papel con tinta ciruela para los compactos.
- **Responsive:** una columna en móvil, dos columnas desde `40rem` y composición principal/compacta asimétrica desde `68rem`.
- **Image State:** escala suave a `1.03` durante `600ms` en hover.

### Team Roster
- **Structure:** listado plano sobre papel mineral, separado por líneas ciruela de `1px`; cada entrada alinea retrato vertical, nombre, especialidad y contacto.
- **Portraits:** `6rem x 7.5rem`, radio pequeño y recorte superior; reducen a `4.75rem x 6rem` en pantallas muy estrechas.
- **Responsive:** una, dos y tres columnas en las bases móvil, `40rem` y `68rem`.

### Image Archive
- **Structure:** mosaico documental con gap de `0.75rem`, radio pequeño y recortes consistentes; el marcador anual usa la escala `archive-year`.
- **Responsive:** una columna en móvil, dos desde `40rem` y retícula de 12 columnas desde `68rem`; la imagen líder ocupa 8 columnas por dos filas y la pieza alta 4 por dos.
- **Image State:** escala contenida a `1.025` durante `650ms` en hover.

### Motion
- **Focal sequence:** las tres líneas del titular entran desde su propio recorte con intervalos de `70ms`; la fotografía principal se descubre verticalmente y su imagen se asienta desde `scale(1.08)`.
- **Section reveals:** servicios, principios, perfiles, archivo y mapa usan `IntersectionObserver` una sola vez. Los recortes y desplazamientos varían por tipo de contenido; no existe un fade genérico aplicado a toda la página.
- **Timing:** estados interactivos usan `180–250ms`; revelados editoriales usan `620–820ms`; el asentamiento fotográfico principal usa `1100ms`. Todos emplean la curva `ease-out` del sistema.
- **Stagger:** listas documentales avanzan en pasos de `70ms`, con un máximo total de `350ms`.
- **Progress:** una regla dorada de `2px` sigue el desplazamiento cuando el navegador admite CSS scroll timelines.
- **Reduced motion:** `prefers-reduced-motion: reduce` impide la clase de movimiento y conserva todo el contenido visible, sin transformaciones ni máscaras.

**The Living Archive Rule.** El contenido se descubre como material documental mediante máscaras y recortes; no rebota, no flota perpetuamente y no vuelve a animarse al regresar.

## Do's and Don'ts

### Do:
- **Do** usar fotografía institucional real como evidencia y conservar recortes con `object-fit: cover`.
- **Do** alternar campos morados y papeles cálidos para construir capítulos claros.
- **Do** mantener objetivos interactivos de al menos `2.75rem` y focos visibles de alto contraste.
- **Do** preservar los cambios de composición establecidos en `24rem`, `40rem`, `52rem` y `68rem`.
- **Do** animar solo `transform`, `opacity` y `clip-path`, manteniendo el contenido visible cuando JavaScript no está disponible.

### Don't:
- **Don't** añadir una segunda tipografía, iconografía decorativa o una paleta ajena al morado, oro y papel.
- **Don't** convertir servicios, roster o archivo en tarjetas flotantes con sombra.
- **Don't** usar botones de píldora, retratos circulares ni radios intermedios inventados.
- **Don't** inventar inputs, chips, diálogos o estados disabled/error que la implementación no contiene.
- **Don't** añadir parallax, loops, rebotes o revelados repetidos que compitan con la lectura sensible del contenido.
