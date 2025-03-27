const User = require("../models/user");
const RefeshToken = require("../models/refeshToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const refeshToken = require("../models/refeshToken");
dotenv.config();

class UserService {
  async getAllUsers() {
    const users = await User.findAll();

    return users;
  }

  async createUser(user) {
    const saltRounds = 10;
    const hashPass = await bcrypt.hash(user.pass, saltRounds);

    const userCreate = await User.create({ ...user, pass: hashPass });

    return userCreate;
  }

  async login(name, pass) {
    const user = await User.findOne({ where: { name: name } });

    if (!user) throw new Error("user not found");
    const isMatch = await bcrypt.compare(pass, user.pass);
    if (!isMatch) throw new Error("pass is wrong");
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: "60s",
      }
    );
    const refeshToken = jwt.sign(
      { id: user.id },
      process.env.REFESH_SECRET_KEY
    );

    // await RefeshToken.create({
    //   user_id: user.id,
    //   token: refeshToken,
    //   expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    // });

    // return { token, refeshToken };

    await RefeshToken.destroy({
      where: {
        user_id: user.id,
      },
    });

    await RefeshToken.upsert({
      user_id: user.id,
      token: refeshToken,
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    return { token, refeshToken };
  }

  async refeshToken(refeshToken) {
    try {
      const decoded = jwt.verify(refeshToken, process.env.REFESH_SECRET_KEY);
      console.log(decoded);

      const user = await User.findByPk(decoded.id);
      if (!user) throw new Error("user not found");

      const newToken = jwt.sign(
        { id: user.id, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: "60s" }
      );

      return newToken;
    } catch (error) {
      throw new Error(error);
    }
  }
}
module.exports = new UserService();
