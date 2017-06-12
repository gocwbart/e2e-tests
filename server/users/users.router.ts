import { Router } from 'express';
import UsersController from './users.controller';

const usersRouter: Router = Router();

usersRouter.get('/:id', UsersController.get);

export { usersRouter };
