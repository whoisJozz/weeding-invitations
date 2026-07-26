# RFC-010
# Asset Management & Recovery Policy

Estado:
APPROVED

Autor:
Creative Technical Director

---

## Objetivo

Evitar pérdidas de tiempo ocasionadas por recursos inexistentes, rutas incorrectas o assets asumidos durante el desarrollo.

A partir de este RFC queda prohibido asumir la existencia de cualquier recurso.

---

# Nueva Política

Gemini NO deberá inventar:

- imágenes
- SVG
- texturas
- fuentes
- videos
- audio
- iconos

si éstos no existen dentro del proyecto.

---

# Antes de implementar

Si un Sprint requiere un recurso nuevo deberá preguntar primero.

Ejemplos:

"Se requiere una textura de papel."

"Se requieren peonías SVG."

"Se requiere una fuente WOFF2."

"Se requiere una textura AVIF."

No continuar la implementación hasta confirmar el recurso.

---

# Validación de rutas

Antes de asumir un error de CSS o JavaScript deberá comprobar:

✓ nombre exacto

✓ extensión

✓ mayúsculas

✓ minúsculas

✓ carpeta

✓ ruta

---

# Assets opcionales

Si un recurso aún no existe deberá proponerse un parche temporal.

Ejemplos:

papel mediante CSS

flores mediante degradados

placeholder

etc.

---

# Assets obligatorios

Antes de cerrar un Sprint deberán existir físicamente:

✓ videos

✓ audio

✓ tipografías

✓ SVG

✓ imágenes

No se aceptarán referencias a archivos inexistentes.

---

# Auto QA obligatorio

Antes de entregar un Sprint responder internamente:

□ ¿Todos los assets existen?

□ ¿Todos cargan?

□ ¿Hay errores 404?

□ ¿Las rutas fueron verificadas?

Si cualquiera responde NO:

detener implementación y solicitar el recurso correspondiente.

---

Este RFC tiene prioridad sobre cualquier Sprint futuro.