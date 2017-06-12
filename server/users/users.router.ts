import { Router } from "express";
import UsersController from '../controllers/users.controller';

const usersRouter: Router = Router();

usersRouter.get("/:id", UsersController.get);

export { usersRouter };
