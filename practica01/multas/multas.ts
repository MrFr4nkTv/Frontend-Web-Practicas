// Declaración del tipo literal para el estado
type EstadoPrestamo = 'activo' | 'devuelto' | 'vencido';

interface Prestamo {
  multa: number; // Tipo corregido a número
  ejemplar: number;
  estado: EstadoPrestamo;
  socio?: string; // Propiedad opcional
}

function calcularMulta(prestamo: Prestamo): number {
  const cargoFijo = 50;
  return prestamo.multa + cargoFijo;
}

function generarRecibo(prestamo: Prestamo): string {
  // Manejo explícito cuando socio es undefined (requerido en modo estricto)
  const nombreSocio = prestamo.socio !== undefined ? prestamo.socio : 'Socio no registrado';
  const total = calcularMulta(prestamo);

  return `=== RECIBO DE MULTA ===\nSocio: ${nombreSocio}\nEstado: ${prestamo.estado}\nEjemplar: ${prestamo.ejemplar}\nTotal a pagar: $${total}`;
}

const prestamoValido: Prestamo = {
  multa: 350,
  ejemplar: 14,
  estado: 'activo',
  socio: 'Juan Pérez'
};

console.log(generarRecibo(prestamoValido));

let edad: number = "veinte";
console.log(prestamoValido.fechaDevolucion);
const prestamoInvalido: Prestamo = { multa: 100, ejemplar: 5, estado: 'ACTIVO' };
