export interface Event {
    codigo: number;
    nombre: string;
    descripcion: string;
    teatro: string;
    ciudad: string;
    // La API entrega las fechas como string ISO; los datos de prueba usan Date.
    fecha_inicio: Date | string;
    fecha_fin: Date | string;
    capacidad: number;
    precio: number;
    observaciones: string;
    estado: EventState;
}

export const EVENT_STATES = [
    'Programado',
    'En Boleteria',
    'En Vivo',
    'Finalizado',
    'Cancelado',
] as const;

export type EventState = (typeof EVENT_STATES)[number];

/** Filtros opcionales para consultar eventos en la API. */
export interface EventFilters {
    ciudad?: string;
    estado?: EventState;
}
