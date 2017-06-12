import { Router } from 'express';

const usersRouter: Router = Router();

function getUser(req, res) {
  return res.json({
    name: 'John Smith',
    email: 'john.smith@pearson.com',
    role: 'admin'
  });
}

usersRouter.get("/:id", getUser);

export { usersRouter };
