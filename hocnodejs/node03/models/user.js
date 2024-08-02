"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      //khai bao cac cot trong table
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      // cac Options
      sequelize,
      modelName: "User",
      tableName: "users", //Ten table trong database
      //Mac dinh sequelize se tu dong khao bao truong createAt va updateAt
      // neu muon vo hieu hoa 2 truong nay, khai bao timestamps:false
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return User;
};
