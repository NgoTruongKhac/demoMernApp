const { DataTypes, INTEGER } = require("sequelize");

const { sequelize } = require("../configs/connectDb");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    pass: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "customer",
    },
  },
  {
    freezeTableName: true,
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
