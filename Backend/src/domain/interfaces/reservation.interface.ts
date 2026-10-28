export const RESERVATION_STATES = [
  "Reservada",
  "Confirmada",
  "Cancelada",
] as const;

export type ReservationState = (typeof RESERVATION_STATES)[number];

/** Reservación junto con los datos del evento al que pertenece. */
export interface ReservationReport {
  codigo: number;
  fecha: Date;
  cliente_nombre: string;
  cliente_correo: string;
  entradas: number;
  total: number;
  observaciones: string | null;
  estado: ReservationState;
  evento_codigo: number;
  evento_nombre: string;
  evento_ciudad: string;
  evento_teatro: string;
}

/** Filtros opcionales para consultar reservaciones (llegan como query params). */
export interface ReservationFilters {
  estado?: string | undefined;
}
