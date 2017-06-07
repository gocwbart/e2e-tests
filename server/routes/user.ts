import { Request, Response, Router } from "express";

const userRouter: Router = Router();

const user = {
  name: "John Smith",
  email: "john.smith@pearson.com",
  role: "admin",
};

userRouter.get("/", (request: Request, response: Response) => {
  response.json(user);
});

export { userRouter };
