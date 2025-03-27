const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,

  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);
async function connectDb() {
  try {
    await sequelize.authenticate();
    console.log("connect is success");
  } catch (error) {
    console.error(error);
  }
}

module.exports = { connectDb, sequelize };
