"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserType", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Type: {
        defaultValue: "Customer",
        type: Sequelize.ENUM("Staff(admin & kitchen)", "Customer", "Driver"),
      },
    });
    await queryInterface.createTable("User", {
      id: {
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
      Password: {
        allowNull: false,
        type: Sequelize.CHAR,
      },
      DOB: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Mobile: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      IsMobileVerified: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      PhotoUrl: {
        allowNull: false,
        type: Sequelize.CHAR,
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
          model: "UserType",
          key: "id",
        },
      },
      UpdatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "UserType",
          key: "id",
        },
      },
      UserTypeID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "UserType",
          key: "id",
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
