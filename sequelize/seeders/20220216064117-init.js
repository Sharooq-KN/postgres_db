"use strict";

const hashPassword = require("../../helper/hashpassword");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "UserType",
      [
        {
          ID: 1,
          Type: "Staff(kitchen)",
        },
        {
          ID: 2,
          Type: "Staff(admin)",
        },
        {
          ID: 3,
          Type: "Customer",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "User",
      [
        {
          ID: 1,
          UserTypeID: 1,
          Email: "demo@demo.com",
          IsEmailVerified: false,
          Password: hashPassword("abcdefghj"),
          FirstName: "Joe",
          LastName: "John",
          DOB: new Date(1993, 12, 3),
          Mobile: "9192929292929",
          IsMobileVerified: true,
          PhotoUrl: "/public/img1.png",
          IsActive: true,
          IsStaff: false,
          PermissionHex: "10",
          CreatedBy: 2,
          UpdatedBy: 2,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          ID: 2,
          UserTypeID: 1,
          Email: "example@demo.com",
          IsEmailVerified: true,
          Password: hashPassword("123456789"),
          FirstName: "Olive",
          LastName: "Yew",
          DOB: new Date(1967, 11, 12),
          Mobile: "91123456789",
          IsMobileVerified: true,
          PhotoUrl: "/public/img2.png",
          IsActive: true,
          IsStaff: false,
          PermissionHex: "10",
          CreatedBy: 2,
          UpdatedBy: 2,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          ID: 3,
          UserTypeID: 3,
          Email: "demo3@demo3.com",
          IsEmailVerified: true,
          Password: hashPassword("qwertyuiop"),
          FirstName: "Allie",
          LastName: "Grater",
          DOB: new Date(1993, 12, 3),
          Mobile: "919897456464",
          IsMobileVerified: true,
          PhotoUrl: "/public/img3.png",
          IsActive: true,
          IsStaff: true,
          PermissionHex: "3",
          CreatedBy: 1,
          UpdatedBy: 1,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("User", null, bulkDeleteOptions);
    await queryInterface.bulkDelete("UserType", null, bulkDeleteOptions);
  },
};
