import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Event, EventState } from '../../interfaces/event.interface';

const STATUS_MODIFIERS: Record<EventState, string> = {
  'Programado': 'scheduled',
  'En Boleteria': 'ticket',
  'En Vivo': 'live',
  'Finalizado': 'finished',
  'Cancelado': 'cancelled',
};

@Component({
  selector: 'app-event-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  host: { class: 'col-12 col-md-6 col-lg-4' },
})
export class EventCardComponent {
  @Input() event: Event | null = null;

  get statusModifier(): string {
    return this.event ? STATUS_MODIFIERS[this.event.estado] : 'ticket';
  }
}
