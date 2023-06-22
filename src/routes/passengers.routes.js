import { Router } from "express";
import { getPassengersTravels } from "../controllers/passengers.controllers.js";

const passengersRouter = Router()

passengersRouter.get('/passengers/travels', getPassengersTravels)

export default passengersRouter