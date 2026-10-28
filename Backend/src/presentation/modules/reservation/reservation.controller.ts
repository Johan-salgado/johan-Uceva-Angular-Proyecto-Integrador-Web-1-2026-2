import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { ReservationService } from "./reservation.service";

export class ReservationController {

  private readonly reservationService = new ReservationService();

  getReport = (req: Request, res: Response): void => {
    const { estado } = req.query as Record<string, string | undefined>;

    this.reservationService.getReport({ estado })
      .then((reservations) => res.status(200).json(reservations))
      .catch((error) => HandleError.error(error, res));
  };

}
