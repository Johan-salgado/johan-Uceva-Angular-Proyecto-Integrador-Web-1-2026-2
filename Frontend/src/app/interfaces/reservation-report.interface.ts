import { ReservationState } from './reservation.interface';

/** Reservación junto con los datos de su evento, tal como la entrega la API. */
export interface ReservationReport {
    codigo: number;
    fecha: string;
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

/** Filtros opcionales para consultar el reporte de reservaciones. */
export interface ReservationFilters {
    estado?: ReservationState;
}
