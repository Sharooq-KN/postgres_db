"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserType.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Type: {
        defaultValue: "Customer",
        type: DataTypes.ENUM("Staff(admin & kitchen)", "Customer", "Driver"),
      },
    },
    {
      sequelize,
      modelName: "UserType",
      tableName: "UserType",
      freezeTableName: true,
    }
  );
  return UserType;
};
