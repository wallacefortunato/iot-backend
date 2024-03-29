import PatientsController from "../controllers/PatientsController";
import { Router } from "express";
import ensureAuthenticated from "../middleware/ensureAuthenticated";

const patientsRouter = Router();
const patientsController = new PatientsController();

patientsRouter.use(ensureAuthenticated);
patientsRouter.get("/", patientsController.index);
patientsRouter.post("/", patientsController.create);
patientsRouter.get("/:id", patientsController.show);
patientsRouter.put("/:id", patientsController.update);
patientsRouter.delete("/:id", patientsController.delete);

export default patientsRouter;
