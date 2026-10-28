import { pool } from "../../../config/database";
import { CustomError } from "../../../domain/errors/custom.error";
import {
  EVENT_STATES,
  Event,
  EventFilters,
  EventState,
} from "../../../domain/interfaces/event.interface";

export class EventService {

  /**
   * Consulta los eventos, con filtros opcionales por ciudad y estado.
   *
   * @param filters Filtros recibidos desde la petición
   * @throws CustomError 400 si el estado no es válido
   */
  public async getAll(filters: EventFilters = {}): Promise<Event[]> {
    const { ciudad, estado } = filters;
    const conditions: string[] = [];
    const values: string[] = [];

    if (ciudad) {
      values.push(ciudad);
      conditions.push(`LOWER(ciudad) = LOWER($${values.length})`);
    }

    if (estado) {
      if (!this.isEventState(estado)) {
        throw CustomError.badRequest(
          `Estado inválido. Valores permitidos: ${EVENT_STATES.join(", ")}`
        );
      }
      values.push(estado);
      conditions.push(`estado = $${values.length}`);
    }

    const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

    // NUMERIC se castea a float8 porque pg lo devuelve como string por defecto.
    const sql = `
      SELECT codigo, nombre, descripcion, teatro, ciudad,
             fecha_inicio, fecha_fin, capacidad,
             precio::float8 AS precio, observaciones, estado
      FROM events
      ${where}
      ORDER BY fecha_inicio ASC;`;

    const result = await pool.query<Event>(sql, values);
    return result.rows;
  }

  private isEventState(value: string): value is EventState {
    return (EVENT_STATES as readonly string[]).includes(value);
  }

}
