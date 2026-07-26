# Sprint 03.0
Recovery Patch

Estado

READY

---

Objetivo

Recuperar completamente la estabilidad visual del proyecto antes de iniciar las siguientes escenas.

No agregar funcionalidades nuevas.

---

## TASK 01

Arquitectura

Validar que la arquitectura siga exactamente la especificada en RFC-009.

No modificar estructura.

No mover componentes.

No renombrar archivos.

---

## TASK 02

Intro

Validar que:

"Toca para abrir"

viva SIEMPRE sobre el primer frame del video.

Nunca sobre un fondo negro.

Nunca sobre un fondo sólido.

Debe existir una única capa:

Video

↓

Texto

↓

Tap

↓

Fade

↓

Video

---

## TASK 03

Hero

Reducir considerablemente la duración de entrada del marco.

Actualmente la animación transmite sensación de espera.

Objetivo:

Que el marco termine de dibujarse aproximadamente entre 0.7 s y 1.0 s.

Debe sentirse elegante pero inmediata.

---

## TASK 04

Flores SVG

Actualmente no cargan.

No asumir error del navegador.

Validar:

✓ ruta

✓ nombre

✓ extensión

✓ mayúsculas

✓ minúsculas

✓ estructura de assets

✓ importación

✓ referencia HTML

✓ referencia CSS

No modificar assets si el problema es únicamente la ruta.

---

## TASK 05

Composición Floral

Las flores deben recuperar la intención editorial original.

Objetivo:

- visibles
- elegantes
- grandes
- parcialmente fuera del viewport
- baja saturación
- opacidad aproximada entre 20% y 30%

Nunca competir con los nombres.

---

## TASK 06

Editorial Paper

Implementar correctamente el fondo editorial.

Debe sentirse como papel de algodón.

No como textura.

No como patrón.

Debe ser casi imperceptible.

No afectar rendimiento.

Puede implementarse mediante:

background-image

o

pseudo-elemento

según resulte más eficiente.

---

## TASK 07

Performance

Eliminar cualquier tiempo muerto.

No debe existir pausa entre:

fin del video

↓

aparición del Hero

Todo debe sentirse continuo.

---

## QA

Debe validarse en:

Desktop

Android Chrome

Android Edge

iPhone Safari

iPhone Chrome

---

## Criterios de aceptación

✓ Intro estable

✓ Video centrado

✓ Leyenda sobre video

✓ Marco rápido

✓ Flores visibles

✓ Fondo editorial funcionando

✓ Sin errores 404

✓ Sin tiempos muertos

Una vez aprobado este Sprint iniciaremos Story Act II.

---

Commit

fix(recovery): restore editorial stability before Story Act II