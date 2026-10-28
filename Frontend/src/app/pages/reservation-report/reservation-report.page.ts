import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RESERVATION_STATES, ReservationState } from '../../interfaces/reservation.interface';
import { ReservationReport } from '../../interfaces/reservation-report.interface';
import { ReservationService } from '../../services/reservation/reservation.service';

@Component({
  selector: 'app-reservation-report.page',
  imports: [FormsModule, DatePipe, CurrencyPipe],
  templateUrl: './reservation-report.page.html',
  styleUrl: './reservation-report.page.scss',
})
export class ReservationReportPage implements OnInit {

  private readonly reservationService = inject(ReservationService);

  readonly states = RESERVATION_STATES;

  readonly reservations = signal<ReservationReport[]>([]);
  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly selectedState = signal<ReservationState | ''>('');

  /** Las reservaciones canceladas no cuentan para entradas ni recaudo. */
  private readonly activeReservations = computed(() =>
    this.reservations().filter((reservation) => reservation.estado !== 'Cancelada')
  );

  readonly totalReservations = computed(() => this.reservations().length);

  readonly totalTickets = computed(() =>
    this.activeReservations().reduce((sum, reservation) => sum + reservation.entradas, 0)
  );

  readonly totalRevenue = computed(() =>
    this.activeReservations().reduce((sum, reservation) => sum + reservation.total, 0)
  );

  ngOnInit(): void {
    this.loadReport();
  }

  onStateChange(state: ReservationState | ''): void {
    this.selectedState.set(state);
    this.loadReport();
  }

  statusModifier(state: ReservationState): string {
    const modifiers: Record<ReservationState, string> = {
      Reservada: 'pending',
      Confirmada: 'confirmed',
      Cancelada: 'cancelled',
    };
    return modifiers[state];
  }

  loadReport(): void {
    this.loading.set(true);
    this.errorMessage.set(null);

    const state = this.selectedState();

    this.reservationService.getReport(state ? { estado: state } : {}).subscribe({
      next: (reservations) => {
        this.reservations.set(reservations);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('No fue posible cargar las reservaciones. Verifica que el backend esté en ejecución.');
        this.loading.set(false);
      },
    });
  }

}
