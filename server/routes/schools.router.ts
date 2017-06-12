import { Router } from "express";
import SchoolsController from '../controllers/schools.controller';

const schoolsRouter: Router = Router();

schoolsRouter.get("/", SchoolsController.get);

export { schoolsRouter };
