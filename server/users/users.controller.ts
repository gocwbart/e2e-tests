export default class UserController {
  static get(req, res) {
    const user = {
      name: 'John Smith',
      email: 'john.smith@pearson.com',
      role: 'admin'
    };

    return res.json(user);
  }
}