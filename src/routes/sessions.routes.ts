import SessionsController from "../controllers/SessionsController";
import { Router } from "express";

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post("/", sessionsController.create);

export default sessionsRouter;
