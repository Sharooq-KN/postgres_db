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
      this.UserTypeID = this.belongsTo(models.UserType, {
        foreignKey: "ID",
        constraints: false,
      });
    }
  }
  User.init(
    {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      FirstName: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      LastName: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      Email: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      IsEmailVerified: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
      Password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      DOB: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Mobile: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      IsMobileVerified: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
      PhotoUrl: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      IsActive: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
      IsStaff: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
      PermissionHex: {
        allowNull: true,
        type: DataTypes.STRING(process.env.ROLE_MODULE_COUNT),
      },
      CreatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "ID",
        },
      },
      UpdatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "User",
          key: "ID",
        },
      },
      UserTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "UserType",
          key: "ID",
        },
      },
      CreatedAt: {
        type: DataTypes.DATE,
        field: "CreatedAt",
        allowNull: false,
      },
      UpdatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "UpdatedAt",
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "User",
      freezeTableName: true,
      defaultScope: {
        rawAttributes: { exclude: ["Password"] },
      },
    }
  );
  return User;
};
