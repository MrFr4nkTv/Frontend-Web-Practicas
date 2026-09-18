

### 1. ¿Qué generó el comando `nest new`?

Generó el esqueleto del proyecto: `package.json`, `tsconfig.json`, `nest-cli.json`, `src/main.ts`, `src/app.module.ts`, `src/app.controller.ts`, `src/app.service.ts` y sus archivos de prueba, más la configuración base para compilar, correr y probar.

### 2. ¿Qué hace el `AppService` que ya viene generado?

Solo tiene el método `getHello()` que devuelve el string `"Hello World!"`. No tiene estado ni lógica de negocio, es el ejemplo por defecto.

### 3. ¿Por qué la ruta funciona sin declarar nada en `app.module.ts`?

Porque `AppController` ya está registrado en el arreglo `controllers` de `AppModule`. Nest descubre las rutas por los decoradores `@Controller`, `@Get('clases')` y `@Post('clases')`, no hay que registrar cada ruta en el módulo.

La línea que arranca la app está en `src/main.ts`: `await app.listen(process.env.PORT ?? 3000);`.

### 4. ¿Qué pasaría si el cuerpo de la petición viniera vacío?

Se agregaría `undefined` o `{}` al arreglo `clases` y se devolvería ese valor vacío. Como esta práctica no tiene validación, el catálogo quedaría corrupto.

### 5. ¿En qué archivo vive hoy toda la lógica de la práctica?

En `src/app.controller.ts`: ahí está el arreglo `clases` en memoria y los tres handlers (`GET /`, `GET /clases`, `POST /clases`).

## Evidencias

Capturas de las cuatro peticiones:

1. `GET /` en navegador.
2. `GET /clases` en navegador (2 clases).
3. `POST /clases` en REST Client (clase creada).
4. `GET /clases` después del POST (lista con 3 clases).
