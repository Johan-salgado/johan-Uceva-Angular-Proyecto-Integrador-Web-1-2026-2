import { Event } from "./event.interface";

export interface Reservation {
    codigo: number;
    fecha: Date;
    total: number;
    entradas: number;
    observaciones: number;
    estado: ReservationState;
    evento: Event;
}

export const RESERVATION_STATES = ['Reservada', 'Confirmada', 'Cancelada'] as const;

export type ReservationState = (typeof RESERVATION_STATES)[number];
