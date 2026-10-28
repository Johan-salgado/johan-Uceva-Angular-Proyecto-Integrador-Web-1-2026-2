import { pool } from "../../../config/database";
import { CustomError } from "../../../domain/errors/custom.error";
import {
  RESERVATION_STATES,
  ReservationFilters,
  ReservationReport,
  ReservationState,
} from "../../../domain/interfaces/reservation.interface";

export class ReservationService {

  /**
   * Consulta las reservaciones con los datos de su evento (JOIN),
   * con filtro opcional por estado.
   *
   * @param filters Filtros recibidos desde la petición
   * @throws CustomError 400 si el estado no es válido
   */
  public async getReport(filters: ReservationFilters = {}): Promise<ReservationReport[]> {
    const { estado } = filters;
    const values: string[] = [];
    let where = "";

    if (estado) {
      if (!this.isReservationState(estado)) {
        throw CustomError.badRequest(
          `Estado inválido. Valores permitidos: ${RESERVATION_STATES.join(", ")}`
        );
      }
      values.push(estado);
      where = "WHERE r.estado = $1";
    }

    const sql = `
      SELECT r.codigo, r.fecha, r.cliente_nombre, r.cliente_correo,
             r.entradas, r.total::float8 AS total, r.observaciones, r.estado,
             e.codigo AS evento_codigo, e.nombre AS evento_nombre,
             e.ciudad AS evento_ciudad, e.teatro AS evento_teatro
      FROM reservations r
      INNER JOIN events e ON e.codigo = r.evento_codigo
      ${where}
      ORDER BY r.fecha DESC;`;

    const result = await pool.query<ReservationReport>(sql, values);
    return result.rows;
  }

  private isReservationState(value: string): value is ReservationState {
    return (RESERVATION_STATES as readonly string[]).includes(value);
  }

}
