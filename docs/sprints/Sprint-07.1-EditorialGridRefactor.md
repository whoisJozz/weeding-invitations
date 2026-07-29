# Sprint 07.1
## Editorial Grid Refactor
Version: 1.0
Estado: CRÍTICO
Prioridad: MUY ALTA

---

# Contexto

Durante QA Mobile se detectó que la sección de Padrinos dejó de comportarse como una composición editorial.

Actualmente:

- Desktop se ve aceptable.
- Tablet comienza a romper alineaciones.
- Mobile se convierte en una lista infinita con elementos demasiado largos.

El problema NO es visual.

El problema es de arquitectura.

La sección fue creciendo hasta convertirse prácticamente en un capítulo completo.

No queremos seguir agregando parches CSS.

Queremos rediseñar la arquitectura completa.

---

# Objetivo

Convertir la sección "Padrinos" en un verdadero bloque editorial.

Inspiración:

Revistas editoriales.

Catálogos de lujo.

Invitaciones Fine Art.

No una lista HTML.

---

# Nueva Arquitectura

Eliminar el concepto de:

gp-group

gp-grid

gp-item

Como elementos independientes.

Ahora existirán bloques editoriales.

Ejemplo:

━━━━━━━━━━━━━━━━━━━━━━

PASTOR

Joaquín Lugo

━━━━━━━━━━━━━━━━━━━━━━

MAESTRA DE CEREMONIA

Elizabeth Lugo

━━━━━━━━━━━━━━━━━━━━━━

PADRES DEL NOVIO

...

━━━━━━━━━━━━━━━━━━━━━━

PADRINOS

(grid)

━━━━━━━━━━━━━━━━━━━━━━

DAMAS Y DAMOS

(grid)

━━━━━━━━━━━━━━━━━━━━━━

PAJECITOS

(grid)

━━━━━━━━━━━━━━━━━━━━━━

Cada bloque será una "Editorial Card"

No una lista.

---

# Responsive

Desktop

2 columnas.

Tablet

2 columnas.

Mobile

1 sola columna.

Nunca más.

Prohibido intentar mantener dos columnas en teléfonos.

---

# Espaciado

Incrementar whitespace.

Más respiración.

Más aire.

Menos densidad visual.

---

# Tipografía

Reducir ligeramente:

gp-name

en móvil.

Nunca permitir líneas de 5 o 6 palabras.

Usar:

max-width

para que el texto se lea como párrafos.

No como una línea infinita.

---

# Separadores

Agregar separación editorial entre capítulos.

No únicamente una línea.

Ejemplo:

línea

espacio

título

espacio

contenido

espacio

línea

---

# Animaciones

Las animaciones NO cambian.

GodparentsManager continúa usando:

ScrollTrigger.batch()

GSAP

stagger

blur

fade

No modificar timings.

---

# Restricciones

NO modificar:

Hero

Intro

Story

Photo

Countdown

Evento

Marco

Flores

Papel

Solo intervenir la arquitectura de Padrinos.

---

# Recursos

No requiere nuevos assets.

No requiere imágenes.

No requiere SVG.

No requiere PNG.

Todo se resuelve mediante HTML + CSS.

---

# QA

Desktop:

✓ Bloques perfectamente alineados

Tablet:

✓ Dos columnas limpias

Mobile:

✓ Una sola columna

✓ Nada sale del viewport

✓ Nada se corta

✓ Ningún texto invade otra columna

CLS = 0

Layout Shift = 0