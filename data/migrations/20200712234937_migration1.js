exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username").notNullable().unique();
      tbl.string("password").notNullable();
    })
    .createTable("totals", (tbl) => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      tbl.float("total_for_day");
      tbl.timestamp("date", { useTz: false });
    })
    .createTable("monthly_totals", (tbl) => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      tbl.float("total_for_month");
      tbl.timestamp("date", { useTz: false });
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("monthly_totals")
    .dropTableIfExists("totals")
    .dropTableIfExists("users");
};
