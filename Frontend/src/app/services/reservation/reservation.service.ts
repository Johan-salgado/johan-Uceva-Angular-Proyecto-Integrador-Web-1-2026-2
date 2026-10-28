import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../config/api.config';
import { ReservationFilters, ReservationReport } from '../../interfaces/reservation-report.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {

  private readonly http = inject(HttpClient);

  /** Consulta el reporte de reservaciones (GET /api/reservations), con filtro opcional por estado. */
  getReport(filters: ReservationFilters = {}): Observable<ReservationReport[]> {
    let params = new HttpParams();

    if (filters.estado) {
      params = params.set('estado', filters.estado);
    }

    return this.http.get<ReservationReport[]>(`${API_URL}/reservations`, { params });
  }

}
