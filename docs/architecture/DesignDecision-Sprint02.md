---
Project: A&Y Experience
Version: 1.0.0
Document: Design Decision
Sprint: 02

Assigned To:
Lead Experience Engineer (Gemini)

Reviewed By:
Architecture & Creative Direction (ChatGPT)

Approved By:
Product Owner
---

# Design Decision — Sprint 02

---

# Objetivo

Definir las decisiones de diseño que deberán respetarse durante la implementación de la portada principal.

---

# Decisión 001

## La portada NO será un Hero tradicional.

Justificación:

La experiencia representa una invitación física.

No una Landing Page.

---

# Decisión 002

## Todo el contenido principal deberá desarrollarse utilizando HTML y CSS.

Justificación

Mayor nitidez.

Mayor accesibilidad.

Mayor facilidad de mantenimiento.

Mejor rendimiento.

Animaciones más naturales.

---

# Decisión 003

## El diseño seguirá principios editoriales.

Inspiración

Apple

Kinfolk

Vogue

Luxury Wedding Editorial

---

# Decisión 004

## Se utilizará una composición vertical (9:16).

Justificación

Toda la narrativa gira alrededor de una invitación vertical.

Posteriormente se adaptará a escritorio.

---

# Decisión 005

## Se adopta oficialmente la siguiente paleta como Design Tokens v1.0

Azul Marino

#212937

---

Dorado Metálico

#C8A24A

---

Marfil

#F3F0EA

---

Beige Arena

#C7C1AE

---

Taupe

#9F8F76

Esta paleta sustituye cualquier propuesta cromática anterior y deberá centralizarse posteriormente en:

css/base/variables.css

---

# Decisión 006

## La portada debe sentirse impresa.

No utilizar sombras exageradas.

No utilizar efectos modernos innecesarios.

El diseño debe transmitir elegancia mediante composición y tipografía.

---

# Decisión 007

## El espacio negativo será un elemento de diseño.

No llenar la pantalla.

Cada elemento debe respirar.

---

# Decisión 008

## Todas las animaciones deberán ser discretas.

Nunca competir con el contenido.

Las animaciones deberán acompañar la narrativa.

---

# Riesgos

- La fuente Symphony puede requerir ajustes de espaciado y line-height.
- La composición puede variar entre navegadores.
- Será necesario validar el resultado en dispositivos móviles antes de continuar con el siguiente Sprint.

---

# Resultado esperado

Al finalizar este Sprint, el usuario deberá sentir que la invitación apareció de forma natural después de abrir el sobre.

La transición entre el video y la portada deberá sentirse como una única escena continua.

El Hero deberá transmitir elegancia incluso sin las secciones posteriores implementadas.