const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
module.exports = sequelize;

const sequelize = new Sequelize({
  dialect: "postgres",
  database: process.env.DATABASE,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: "localhost",
  define: {
    freezeTableName: true,
    createdAt: "CreatedAt",
    updatedAt: "UpdatedAt",
  },
});

module.exports = db;
