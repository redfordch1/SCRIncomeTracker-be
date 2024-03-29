// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "scr_income_tracker.db",
      user: "chaseredford",
      password: "chasarsammarv",
      ssl: true
    },
    pool: {
      min: 3,
      max: 100,
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "sqlite3",
    connection: {
      database: "SCRIncomeTracker_db",
      user: "redfordch1",
      password: "ChaSarSamMarv",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: process.env.HEROKU_POSTGRESQL_BROWN_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tablename: "knex_migrations",
      directory: "./data/migrations",
    },
  },
};
