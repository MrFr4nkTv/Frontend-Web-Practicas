## Respuestas y Evidencias de la Práctica

### Paso 2: Escribir el error de JavaScript

* **Pregunta:** ¿Hubo algún error, alguna advertencia o algo en la consola que avisara?
* **Respuesta:** No. JavaScript es un lenguaje de tipado dinámico y débil. Al ejecutar el operador `+` entre el string `'350'` y el número `50`, JavaScript realiza una coerción implícita convirtiendo el número a texto y concatenándolos, produciendo `'35050'` sin generar advertencias ni errores en la consola.

---

### Paso 3: Anotar el tipo

* **Pregunta:** Si el archivo tiene un error de tipos, ¿por qué Node lo ejecuta?
* **Respuesta:** Porque Node.js únicamente interpreta y ejecuta código en tiempo de ejecución (*runtime*) e ignora las comprobaciones de tipos estáticos de TypeScript. La validación de tipos la realiza el compilador (`tsc`) durante el desarrollo, no el motor de ejecución.
* **Pregunta:** ¿Cuál comando revisa y cuál ejecuta?
  * **Comando que revisa:** `npx tsc --noEmit`
  * **Comando que ejecuta:** `node multas.js` (o `node multas.ts`)

---

### Paso 4: Declarar variables

* **Pregunta:** De las dos líneas que usan `const`, ¿por qué sólo una falla?
* **Respuesta:** `const` impide la reasignación de la **referencia** de memoria de la variable. Modificar una propiedad interna de un objeto (`objetoPrueba.clave = 2`) altera el contenido pero mantiene la misma referencia, lo cual es totalmente válido. Reasignar el objeto completo intenta reemplazar la referencia, lo que provoca un error de compilación.
* **Pregunta:** Al asignarle un texto a la variable con `let`, nadie escribió que fuera un número. ¿De dónde salió ese tipo?
* **Respuesta:** Salió del mecanismo de **inferencia de tipos** de TypeScript. Al inicializar la variable con un valor numérico (`let contador = 10`), TypeScript deduce e impone automáticamente el tipo `number`.

### Paso 6: Provocar tres errores distintos

1. **Error 1: Asignación de tipo incompatible**
   * **Código:** `let edad: number = "veinte";`
   * **Clave TS:** `TS2322`
   * **Línea:** 33
   * **Mensaje exacto:** `Type 'string' is not assignable to type 'number'.`
   * **Análisis:** Esperaba un tipo `number` pero recibió un `string`.

2. **Error 2: Acceso a propiedad inexistente**
   * **Código:** `console.log(prestamoValido.fechaDevolucion);`
   * **Clave TS:** `TS2339`
   * **Línea:** 34
   * **Mensaje exacto:** `Property 'fechaDevolucion' does not exist on type 'Prestamo'.`
   * **Análisis:** Esperaba una propiedad definida en la interfaz `Prestamo`, pero recibió `fechaDevolucion`.

3. **Error 3: Valor no permitido en tipo literal**
   * **Código:** `const prestamoInvalido: Prestamo = { multa: 100, ejemplar: 5, estado: 'ACTIVO' };`
   * **Clave TS:** `TS2820`
   * **Línea:** 35
   * **Mensaje exacto:** `Type '"ACTIVO"' is not assignable to type 'EstadoPrestamo'. Did you mean '"activo"'?`
   * **Análisis:** Esperaba uno de los valores del tipo `'activo' | 'devuelto' | 'vencido'`, pero recibió `'ACTIVO'`.