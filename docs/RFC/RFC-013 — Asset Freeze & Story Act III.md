# RFC-013
# Asset Freeze & Story Act III

Estado:
APPROVED

Autor:
Creative Technical Director

Fecha:
Sprint 04.1

---

## Objetivo

Congelar oficialmente los recursos gráficos principales del proyecto para evitar cambios constantes en formatos y rutas durante la fase final del desarrollo.

A partir de este Sprint el proyecto entra en modo **Asset Freeze**.

---

# Cambio aprobado

Las ilustraciones florales dejan oficialmente de utilizar SVG.

Nuevo formato aprobado:

PNG

Motivo:

- Mejor compatibilidad con Safari / iOS.
- Transparencia consistente.
- Evitar diferencias de renderizado.
- Reducir tiempo invertido en depuración.

Este cambio queda aprobado para la Release 1.0.

---

# Nueva política

Gemini NO deberá volver a convertir estos recursos a SVG.

No deberá proponer nuevos formatos salvo que el Product Owner lo solicite.

---

# Recursos congelados

✓ flowers-top-left.png

✓ flowers-bottom-right.png

Estos recursos deberán reutilizarse durante toda la aplicación.

---

# Arquitectura

No modificar carpetas.

No modificar nombres.

No modificar rutas.

Si algún recurso no existe:

DETENER IMPLEMENTACIÓN

y solicitar confirmación.

---

# Definition of Done

□ PNG correctamente cargados.

□ Sin errores 404.

□ Sin rutas absolutas incorrectas.

□ Desktop OK.

□ Android OK.

□ Safari OK.

---

Este RFC tiene prioridad sobre futuros cambios relacionados con assets gráficos.