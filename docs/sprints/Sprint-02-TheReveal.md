---
Project: A&Y Experience
Version: 1.0.0
Sprint: 02
Name: The Reveal
Status: Approved

Assigned To:
Lead Experience Engineer (Gemini)

Reviewed By:
Architecture & Creative Direction (ChatGPT)

Approved By:
Product Owner

Last Updated: 2026-07-23
---

# Sprint 02 — The Reveal

> "The invitation is revealed as if it were a printed editorial piece coming to life."

---

# Objetivo

Construir la portada principal (Hero) de la invitación digital.

Este Sprint NO desarrolla el resto de las secciones.

Únicamente se implementará la primera escena que aparece inmediatamente después del video.

---

# Contexto

La introducción ya se encuentra implementada.

El evento:

intro:completed

será el encargado de mostrar la portada.

Toda la transición debe sentirse continua.

El usuario nunca debe percibir un cambio brusco entre el video y la invitación.

---

# Dirección Creativa

La portada debe sentirse como una invitación física de lujo.

No como un Hero tradicional.

Debe inspirarse en diseño editorial.

Mucho espacio negativo.

Jerarquía tipográfica.

Respiración visual.

Elegancia.

Minimalismo.

---

# Objetivos específicos

• Construir el Hero completamente en HTML + CSS.

• No utilizar imágenes para el contenido principal.

• Preparar la estructura para futuras animaciones con GSAP.

• Crear un layout completamente responsive.

• Mantener una composición editorial.

---

# Paleta Oficial (Design Tokens v1.0)

Utilizar exclusivamente la siguiente paleta:

💙 Azul Marino

#212937

Color principal.

Tipografía.

Detalles.

---

✨ Dorado Metálico

#C8A24A

Sellos.

Detalles.

Acentos.

Líneas decorativas.

---

🤍 Marfil

#F3F0EA

Fondo principal.

---

🟤 Beige Arena

#C7C1AE

Fondos secundarios.

Texturas.

---

🪵 Taupe

#9F8F76

Texto secundario.

Detalles discretos.

---

# Tipografía

Principal:

Symphony

La tipografía deberá ser protagonista.

No saturar con diferentes fuentes.

---

# Alcance

Construir únicamente:

- Fondo
- Contenedor principal
- Nombres
- Fecha
- Lugar (placeholder)
- Espaciados
- Jerarquía tipográfica

NO implementar todavía:

Countdown

Mesa de regalos

Padrinos

Dress Code

RSVP

---

# Responsive

Diseñar inicialmente sobre composición 9:16.

Posteriormente adaptar.

Nunca diseñar Desktop First.

---

# Motion

La portada debe aparecer mediante una transición muy sutil.

No utilizar efectos exagerados.

Animaciones lentas.

Fade.

Opacity.

Transform.

---

# Carpetas autorizadas

index.html

css/components/

css/layout/

css/base/

js/managers/

---

# Archivos esperados

Modificar:

index.html

hero.css

main.js

Crear (si es necesario):

HeroManager.js

---

# Restricciones

No usar Bootstrap.

No usar Tailwind.

No usar React.

No usar Vue.

No usar Angular.

Todo debe desarrollarse desde cero.

---

# Definition of Done

□ Hero completamente responsive.

□ Sin imágenes para el contenido principal.

□ Layout editorial.

□ Jerarquía tipográfica clara.

□ Compatible con GSAP.

□ Código comentado.

□ Sin errores de consola.

---

# QA Checklist

□ Parece una invitación y no una landing page.

□ La tipografía tiene protagonismo.

□ Existe suficiente espacio negativo.

□ No existen componentes visuales innecesarios.

□ El Hero mantiene su composición en diferentes resoluciones.

□ Lighthouse Performance > 90.

□ Lighthouse Accessibility > 90.

---

# Commit sugerido

feat(hero): implement editorial reveal scene