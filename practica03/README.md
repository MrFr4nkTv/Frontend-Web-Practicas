## Preguntas de reflexión

### 1. ¿Hizo falta una base de datos real para probar la regla de negocio? ¿Qué dice eso sobre para qué sirve el patrón Repository?

No. La regla se prueba con el Map en memoria, sin necesidad de una base de datos real.

Eso muestra para qué sirve el patrón Repository: separar la lógica del dominio del detalle de persistencia. El dominio define un contrato de cómo guardar y buscar, y la infraestructura decide si es memoria, archivo o Postgres.

### 2. El Service recibe el repositorio como `Repository<Prestamo>`, no `InMemoryPrestamoRepository`. ¿Qué se rompía si se usaba la clase concreta?

Si se usara la clase concreta, el Service quedaría acoplado a la infraestructura. Ya no sería posible cambiar de base de datos sin modificar el Service, ni probar con otro repositorio.

Con la interfaz, el Service solo depende del contrato y `main.ts` es el único lugar que elige la implementación concreta.

### 3. Si se cambiara el Map en memoria por una base de datos real, ¿cuántos archivos se tocarían? ¿Por qué tan pocos?

Solo uno o dos: se crea la nueva clase en `infra/` y se cambia la línea del `new` en `main.ts`.

Son tan pocos porque el resto — entidad, DTOs y Service — depende de la interfaz `PrestamoRepository`, no del Map. Mientras la nueva clase cumpla el mismo contrato, lo de arriba no necesita cambios.

