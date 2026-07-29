# RFC-011
# "Nuestro Recuerdo"

Estado:
PROPOSED

Autor:
Creative Direction (ChatGPT)

Implementador:
Gemini

Sprint:
Sprint-06

---

## Objetivo

Crear una escena editorial entre "Nuestra Historia" y la información del evento.

No debe sentirse como una galería.

Debe sentirse como un recuerdo que emerge lentamente de un sobre.

La intención emocional es conectar al invitado con los protagonistas antes de presentar la información logística.

---

## Justificación UX

Actualmente la navegación es:

Intro
↓

Hero
↓

Historia
↓

Contador

Existe una transición muy funcional.

Pero falta un momento emocional.

La fotografía permitirá que el usuario genere conexión antes de comenzar la parte informativa.

---

## Concepto

"No queremos mostrar una fotografía.

Queremos entregar un recuerdo."

---

## Principios visuales

NO utilizar:

❌ Cards modernas

❌ Bordes redondeados

❌ Sombras exageradas

❌ Glassmorphism

❌ Efectos tecnológicos

SI utilizar:

✓ Editorial

✓ Fine Art

✓ Papel

✓ Fotografía impresa

✓ Elegancia

✓ Minimalismo

---

## Arquitectura

Nuevo componente

PhotoSection

Debe ser independiente.

No modificar Hero.

No modificar StorySection.

No modificar Countdown.

---

## Recursos

Gemini NO debe inventar recursos.

Si requiere:

• textura
• marco
• icono
• fotografía
• ilustración

Debe solicitar confirmación.

No utilizar placeholders.

---

## Animaciones

GSAP únicamente.

Animaciones lentas.

power2.out

expo.out

Sin rebotes.

Sin elastic.

Sin bounce.

---

## Performance

La sección debe cargarse únicamente cuando entre al viewport.

No ejecutar animaciones antes.

Usar IntersectionObserver.

---

## Accesibilidad

Todas las imágenes deberán tener alt.

Decoraciones con aria-hidden.

---

## Responsive

Desktop

Tablet

Mobile

sin modificar la composición.