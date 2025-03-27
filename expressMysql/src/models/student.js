const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/connectDb");

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
    },
    grade: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    freezeTableName: true,
    tableName: "student",
    timestamps: false,
  }
);

module.exports = Student;
