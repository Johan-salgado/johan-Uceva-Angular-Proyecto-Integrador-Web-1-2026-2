import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { EventService } from "./event.service";

export class EventController {

  private readonly eventService = new EventService();

  getAll = (req: Request, res: Response): void => {
    const { ciudad, estado } = req.query as Record<string, string | undefined>;

    this.eventService.getAll({ ciudad, estado })
      .then((events) => res.status(200).json(events))
      .catch((error) => HandleError.error(error, res));
  };

}
