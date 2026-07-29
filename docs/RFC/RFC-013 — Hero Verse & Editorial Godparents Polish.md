# RFC-013
## Hero Verse & Editorial Godparents Polish

Estado:
PROPOSED

Sprint:
07.1

---

## Objetivo

Refinar la composición del Hero y de la sección "Quienes caminarán a nuestro lado" para mejorar la jerarquía visual, la lectura y el equilibrio editorial.

---

## Hero

Agregar debajo de la cita principal un versículo bíblico.

Jerarquía:

Hero Quote

↓

Versículo

↓

Referencia

---

## Versículo

Texto:

DOS CORAZONES CAMINANDO JUNTOS Y DIOS GUIANDO CADA PASO; PORQUE EL CORDÓN DE TRES DOBLECES NO SE ROMPE FÁCILMENTE.

Referencia:

ECLESIASTÉS 4:9–12

---

## Tipografía

Hero Quote

Symphony

Taupe

---

Versículo

Montserrat

Uppercase

Tracking amplio

Taupe oscuro

---

Referencia

Montserrat

Uppercase

Gold

Letter spacing amplio

---

## Animación

Hero Quote

↓

Versículo

↓

Referencia

↓

Scroll Indicator

Animaciones escalonadas mediante GSAP.

---

## Godparents

No utilizar tres columnas.

Desktop:

- Encabezado editorial.
- Bloques institucionales (Pastor, Maestra, Padres) en una composición limpia.
- Padrinos y Madrinas organizados en dos columnas equilibradas.

Mobile:

Una sola columna centrada.

Espaciado vertical generoso entre categorías.

---

## Restricciones

No modificar IntroManager.

No modificar HeroManager.

No alterar CountdownManager.

Solo intervenir HeroSection y GodparentsSection.

---

## Recursos

No asumir imágenes adicionales.

Si Gemini requiere nuevos recursos, nombres de categorías o cambios de estructura deberá solicitar confirmación antes de implementarlos.