const { Sequelize } = require("sequelize");
require("dotenv").config();
const models = require("../models/index");

const db = new Sequelize(
  process.env.BD_NAME,
  process.env.BD_USER,
  process.env.BD_PASS,
  {
    host: process.env.BD_HOST,
    dialect: "sqlite",
    logging: true,
  }
);

db.sync();
models.User.sync({ force: true });

module.exports = db;
