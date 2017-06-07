import { Request, Response, Router } from "express";

const schoolsRouter: Router = Router();

// FIXME: For test purposes only :)
schoolsRouter.get("/", (request: Request, response: Response) => {
  const limit = +request.query.limit || 10;
  const page = +request.query.page || 1;
  const schools = Array(limit)
    .fill((page - 1) * limit)
    .map((num, index) => {
      const schoolId = num + index;

      return {
        name: "School " + schoolId,
        students: Math.pow(schoolId, 3),
        classes: Math.pow(schoolId, 2),
        teachers: schoolId % 8,
        contentBundles: (schoolId + 5) % 3,
      };
    });

  setTimeout(() => {
    response.json({data: schools, count: 200});
  }, 100 + Math.random() * 2000);
});

export { schoolsRouter };
