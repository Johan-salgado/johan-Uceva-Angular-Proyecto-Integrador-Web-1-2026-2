import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../config/api.config';
import { Event, EventFilters } from '../../interfaces/event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  private readonly http = inject(HttpClient);

  /** Consulta los eventos al backend (GET /api/events), con filtros opcionales. */
  getAll(filters: EventFilters = {}): Observable<Event[]> {
    let params = new HttpParams();

    if (filters.ciudad) {
      params = params.set('ciudad', filters.ciudad);
    }

    if (filters.estado) {
      params = params.set('estado', filters.estado);
    }

    return this.http.get<Event[]>(`${API_URL}/events`, { params });
  }

}
