## ¿Por qué una unión de valores y no una enumeración?

Se utiliza una unión de valores porque permite definir de manera directa un conjunto exacto de valores posibles para el estado del préstamo, como `activo`, `devuelto` y `vencido`. Además, permite realizar comprobaciones exhaustivas con TypeScript sin necesidad de utilizar una enumeración.

## ¿Qué se gana con el tipo desconocido (`unknown`) en lugar del que acepta todo?

`unknown` obliga a comprobar el tipo del dato antes de utilizarlo. Esto permite validar la información que proviene de una fuente externa, como el archivo JSON, y evita utilizar los datos sin comprobar que tengan la estructura esperada.

## ¿Por qué la fecha entra como parámetro?

La fecha entra como parámetro para poder probar las funciones con diferentes fechas y obtener resultados reproducibles. De esta manera, las pruebas no dependen directamente de la fecha actual del sistema.
