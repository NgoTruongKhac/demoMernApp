const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/connectDb");

const refeshToken = sequelize.define(
  "refesh_token",

  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // Tên bảng trong database
        key: "id",
      },
      onDelete: "CASCADE",
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "refresh_tokens", // Khớp với tên bảng trong database
    timestamps: true, // Sử dụng createdAt, updatedAt
    createdAt: "created_at",
    updatedAt: false, // Không cần updated_at
  }
);
module.exports = refeshToken;
