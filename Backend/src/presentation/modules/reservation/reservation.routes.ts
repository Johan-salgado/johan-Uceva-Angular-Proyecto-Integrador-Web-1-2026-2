import { Router } from "express";
import { ReservationController } from "./reservation.controller";

export class ReservationRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new ReservationController();

    /**
     * @openapi
     * /api/reservations:
     *   get:
     *     summary: Reporte de reservaciones
     *     description: Retorna las reservaciones junto con los datos de su evento, de la más reciente a la más antigua.
     *     tags: [Reservations]
     *     parameters:
     *       - in: query
     *         name: estado
     *         schema:
     *           type: string
     *           enum: [Reservada, Confirmada, Cancelada]
     *         description: Filtra por estado de la reservación
     *     responses:
     *       200:
     *         description: Lista de reservaciones con su evento
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/ReservationReport'
     *       400:
     *         description: Estado inválido
     */
    router.get("/", controller.getReport);

    return router;
  }
}
