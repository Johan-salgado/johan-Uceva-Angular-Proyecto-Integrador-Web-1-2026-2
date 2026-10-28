import { Router } from "express";
import { EventController } from "./event.controller";

export class EventRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new EventController();

    /**
     * @openapi
     * /api/events:
     *   get:
     *     summary: Lista los eventos
     *     description: Retorna los eventos ordenados por fecha de inicio, con filtros opcionales.
     *     tags: [Events]
     *     parameters:
     *       - in: query
     *         name: ciudad
     *         schema:
     *           type: string
     *         description: Filtra por ciudad (sin distinguir mayúsculas)
     *         example: Tuluá
     *       - in: query
     *         name: estado
     *         schema:
     *           type: string
     *           enum: [Programado, En Boleteria, En Vivo, Finalizado, Cancelado]
     *         description: Filtra por estado del evento
     *     responses:
     *       200:
     *         description: Lista de eventos
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Event'
     *       400:
     *         description: Estado inválido
     */
    router.get("/", controller.getAll);

    return router;
  }
}
