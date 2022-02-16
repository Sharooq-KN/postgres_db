require("dotenv").config();
console.log(process.env.DATABASE_PASSWORD);
module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: "localhost",
    dialect: "postgres",
  },
  // test: {
  //   username: "pc22",
  //   password: "Lilac@PC22#",
  //   database: "mealmedatabase",
  //   host: "localhost",
  //   dialect: "postgres",
  // },
  // production: {
  //   username: "pc22",
  //   password: "Lilac@PC22#",
  //   database: "mealmedatabase",
  //   host: "localhost",
  //   dialect: "postgres",
  // },
};
