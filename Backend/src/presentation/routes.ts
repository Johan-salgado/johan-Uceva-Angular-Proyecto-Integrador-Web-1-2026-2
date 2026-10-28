import { Router } from "express";
import { EventRoutes } from "./modules/event/event.routes";
import { ExampleRoutes } from "./modules/example/example.routes";
import { ReservationRoutes } from "./modules/reservation/reservation.routes";

export class AppRoutes {

  static get routes(): Router {
    const router = Router();
    const apiRouter = Router();

    // Definir rutas
    apiRouter.use("/example", ExampleRoutes.routes);
    apiRouter.use("/events", EventRoutes.routes);
    apiRouter.use("/reservations", ReservationRoutes.routes);

    router.use("/api", apiRouter);

    return router;
  }
}