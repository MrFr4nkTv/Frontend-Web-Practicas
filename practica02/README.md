¿Por qué una unión de valores y no una enumeración?
Se utiliza una unión de valores literales porque permite limitar el estado a un conjunto exacto de valores y realizar comprobaciones exhaustivas sin crear una estructura adicional en tiempo de ejecución.

¿Qué se gana con unknown en lugar del que acepta todo?
Unknown obliga a comprobar el tipo antes de utilizar el dato. Esto permite validar la información obtenida desde una fuente externa como un archivo JSON.

¿Por qué la fecha entra como parámetro? La fecha entra como parámetro para poder probar las funciones con git statusdiferentes fechas y obtener resultados reproducibles, sin depender directamente de la fecha del sistema.