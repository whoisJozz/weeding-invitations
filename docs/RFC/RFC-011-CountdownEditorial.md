# RFC-011
## Countdown Editorial & Storytelling Timing

Estado:
Propuesto

Sprint:
Sprint 05

Autor:
Creative Direction

---

# Objetivo

Transformar el contador en una pieza editorial.

Debe sentirse como parte de una revista de lujo y no como un reloj digital.

La prioridad es:

- estabilidad
- compatibilidad
- elegancia
- microanimaciones

---

# Fecha oficial del evento

Sábado
21 de noviembre de 2026

Zona horaria:

America/Mexico_City
(Guadalajara, Jalisco)

Nunca utilizar formatos ambiguos.

Incorrecto

21/11/2026

Incorrecto

11/21/2026

Correcto

new Date(
    2026,
    10,
    21,
    17,
    0,
    0
);

---

# Compatibilidad requerida

Debe funcionar correctamente en:

✔ Chrome

✔ Safari iOS

✔ Firefox

✔ Edge

sin diferencias de cálculo.

---

# UX

Cuando cambie un número:

No debe "parpadear".

Debe hacer:

opacity

translateY

blur muy ligero

duración aproximada:

350 ms

Inspiración:

Rolex

Apple

Hermès

---

# Layout

Cada bloque debe contener

Número

Etiqueta

Ejemplo

128

DÍAS

04

HORAS

15

MINUTOS

09

SEGUNDOS

Mucho espacio negativo.

Nada comprimido.

---

# Colores

Números

Azul marino

Etiquetas

Taupe

Separadores

Dorado

---

# Performance

No usar setInterval.

Utilizar requestAnimationFrame o temporizador optimizado.

Actualizar únicamente cuando exista un cambio real.

No renderizar si el valor permanece igual.

---

# Accesibilidad

Mantener aria-label.

Mantener contraste.

Mantener tipografía editorial.

---

# Recursos

No requiere nuevos recursos gráficos.
