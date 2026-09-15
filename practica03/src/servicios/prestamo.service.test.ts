import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { InMemoryPrestamoRepository } from '../infra/in-memory-prestamo.repository.js';
import { PrestamoService } from './prestamo.service.js';
import { EjemplarPrestadoError } from '../errores/ejemplar-prestado.error.js';

describe('PrestamoService', () => {
  it('camino feliz: crea y guarda el préstamo', async () => {
    const repo = new InMemoryPrestamoRepository();
    const servicio = new PrestamoService(repo);

    const p = await servicio.crear({
      libroId: 'LIB-0417',
      socioId: 'S-001',
      ejemplares: [14, 15],
    });

    assert.equal(p.estado, 'activo');
    assert.deepEqual(p.ejemplares, [14, 15]);
    assert.equal((await repo.findAll()).length, 1);
    assert.equal((await servicio.listarPorLibro('LIB-0417')).length, 1);
  });

  it('ejemplar duplicado: lanza EjemplarPrestadoError', async () => {
    const repo = new InMemoryPrestamoRepository();
    const servicio = new PrestamoService(repo);

    await servicio.crear({
      libroId: 'LIB-0417',
      socioId: 'S-001',
      ejemplares: [14, 15],
    });

    await assert.rejects(
      () =>
        servicio.crear({
          libroId: 'LIB-0417',
          socioId: 'S-002',
          ejemplares: [15, 16],
        }),
      (e: unknown) => {
        assert.ok(e instanceof EjemplarPrestadoError);
        assert.equal((e as EjemplarPrestadoError).ejemplar, 15);
        return true;
      },
    );
  });
});
