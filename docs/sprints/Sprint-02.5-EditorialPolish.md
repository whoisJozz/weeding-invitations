# Sprint 02.5
# Editorial Polish

Estado:
READY

---

# Objetivo

Este sprint no agrega nuevas funciones.

Únicamente perfecciona toda la experiencia.

La prioridad absoluta es la percepción.

---

# TASK 1

## Revisar Asset Pipeline

Buscar todas las referencias de:

flowers-top-left

flowers-bottom-right

paper-texture

background

Verificar que coincidan exactamente con la estructura real del proyecto.

No asumir rutas.

No reutilizar rutas antiguas.

---

# TASK 2

## Corregir SVG

Verificar:

HTML

CSS

JS

Imports

Vite

Vercel

Todo debe apuntar exactamente al mismo archivo.

Eliminar cualquier referencia PNG anterior.

---

# TASK 3

## Precarga

Las flores deben precargarse antes de comenzar Hero.

No esperar a que aparezcan.

Cuando Hero inicie:

las flores ya deben existir en memoria.

---

# TASK 4

## Fondo editorial

Si existe una textura:

verificar ruta.

Si no existe:

usar temporalmente únicamente CSS.

No dejar fondo plano.

---

# TASK 5

## Marco

Reducir animación.

Objetivo:

0.8 s

máximo 1 s.

Nunca superior.

---

# TASK 6

## Flores

No deben aparecer al final.

Deben comenzar mientras el marco nace.

Tiempo recomendado:

300 ms después del inicio del marco.

---

# TASK 7

## Sincronización

Eliminar cualquier espacio muerto.

La secuencia completa debe sentirse continua.

Video

↓

Hero

↓

Marco

↓

Flores

↓

Texto

↓

Brillos

Todo en un único flujo.

---

# TASK 8

## Optimización

Reducir cualquier repaint innecesario.

Evitar reflows.

Mantener GPU acceleration.

---

# Criterios de aceptación

✔ Sin errores 404

✔ Fondo visible

✔ Flores visibles

✔ Hero inmediato

✔ Marco rápido

✔ Sin tiempos muertos

✔ Safari estable

✔ Android estable

✔ Desktop estable

---

# Filosofía

No estamos construyendo una página.

Estamos dirigiendo una escena.

Cada elemento debe aparecer exactamente cuando el usuario espera verlo,
aunque nunca se dé cuenta de ello.