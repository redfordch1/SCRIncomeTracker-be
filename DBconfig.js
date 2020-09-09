const knex = require("knex");

require("dotenv").config();

const knexConfig = require("./knexfile");

module.exports = knex(knexConfig[process.env.DB_ENV || "development"]);
