"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserType", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Type: {
        defaultValue: "Customer",
        type: Sequelize.ENUM(
          "Staff(kitchen)",
          "Staff(admin)",
          "Customer",
          "Driver"
        ),
      },
    });
    await queryInterface.createTable("User", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FirstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      LastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      IsEmailVerified: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      Password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      DOB: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Mobile: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      IsMobileVerified: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      PhotoUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      IsActive: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      IsStaff: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      PermissionHex: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      CreatedBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "ID",
        },
      },
      UpdatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "User",
          key: "ID",
        },
      },
      CreatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      UpdatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      UserTypeID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "UserType",
          key: "ID",
          allowNull: false,
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    // we can do this because it is the first migration
    await queryInterface.dropAllTables();
  },
};
