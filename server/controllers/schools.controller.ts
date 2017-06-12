export default class SchoolsController {

  // FIXME: Only for test purposes! :)
  static get(req, res) {
    const limit = +req.query.limit || 10;
    const page = +req.query.page || 1;
    const schools = Array(limit)
      .fill((page - 1) * limit)
      .map((num, index) => {
        const schoolId = num + index;

        return {
          name: 'School ' + schoolId,
          students: Math.pow(schoolId, 3),
          classes: Math.pow(schoolId, 2),
          teachers: schoolId % 8,
          contentBundles: (schoolId + 5) % 3
        };
      });

    setTimeout(() => {
      res.json({data: schools, count: 200});
    }, 100 + Math.random() * 2000);
  }
}

