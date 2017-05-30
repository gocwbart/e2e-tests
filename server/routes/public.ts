import { Request, Response, Router } from "express";

const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {
  response.json({
    text: "Pulse Admin v2",
    title: "Greetings.",
  });
});

export { publicRouter };
