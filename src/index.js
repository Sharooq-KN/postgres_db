require('dotenv/config');
const cors = require('cors');
const express = require('express');

const { sequelize } = require('./models');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * Routes * //

app.use('/users', routes.user);

// * Start * //

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});
