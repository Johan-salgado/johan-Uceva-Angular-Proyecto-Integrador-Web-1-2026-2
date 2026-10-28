import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { Event, EVENT_STATES, EventState } from '../../interfaces/event.interface';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-event-catalog.page',
  imports: [FormsModule, EventCardComponent],
  templateUrl: './event-catalog.page.html',
  styleUrl: './event-catalog.page.scss',
})
export class EventCatalogPage implements OnInit {

  private readonly eventService = inject(EventService);

  readonly states = EVENT_STATES;

  readonly events = signal<Event[]>([]);
  readonly cities = signal<string[]>([]);
  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);

  readonly selectedCity = signal('');
  readonly selectedState = signal<EventState | ''>('');

  ngOnInit(): void {
    this.loadEvents(true);
  }

  onCityChange(city: string): void {
    this.selectedCity.set(city);
    this.loadEvents();
  }

  onStateChange(state: EventState | ''): void {
    this.selectedState.set(state);
    this.loadEvents();
  }

  clearFilters(): void {
    this.selectedCity.set('');
    this.selectedState.set('');
    this.loadEvents();
  }

  loadEvents(updateCities = false): void {
    this.loading.set(true);
    this.errorMessage.set(null);

    this.eventService.getAll({
      ...(this.selectedCity() && { ciudad: this.selectedCity() }),
      ...(this.selectedState() && { estado: this.selectedState() as EventState }),
    }).subscribe({
      next: (events) => {
        this.events.set(events);

        // Las ciudades disponibles se obtienen de la consulta sin filtros.
        if (updateCities) {
          this.cities.set([...new Set(events.map((event) => event.ciudad))].sort());
        }

        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('No fue posible cargar los eventos. Verifica que el backend esté en ejecución.');
        this.loading.set(false);
      },
    });
  }

}
