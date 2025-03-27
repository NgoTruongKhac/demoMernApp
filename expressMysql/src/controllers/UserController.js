const service = require("../services/UserService");

class UserColler {
  async getAllUsers(req, res) {
    try {
      const users = await service.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "not found" });
    }
  }
  async createUser(req, res) {
    try {
      const user = req.body;
      const userCreate = await service.createUser(user);

      res.status(200).json(userCreate);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { name, pass } = req.body;
      const token = await service.login(name, pass);
      res.status(200).json(token);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async refeshToken(req, res) {
    try {
      const refeshToken = req.headers.authorization.split(" ")[1];
      const newToken = await service.refeshToken(refeshToken);

      res.status(200).json({ newToken });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new UserColler();
