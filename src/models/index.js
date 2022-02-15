const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = {
  User: sequelize.import('./user'),
  USerType: sequelize.import('./userType'),
};

// exports.sequelize = sequelize;

module.exports = { models, sequelize };
