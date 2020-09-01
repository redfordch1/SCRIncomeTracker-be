const db = require("../DBconfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findMonthlyTotalsByUserId,
  updateTotal,
  remove,
};

function add(total) {
  return db("monthly_totals").insert(total);
}

function find() {
  // return db("monthly_totals").select("*");
  return db("monthly_totals").select("*");
}

function findBy(filter) {
  return db("monthly_totals").where(filter);
}

function findById(id) {
  return db("monthly_totals")
    .where({
      id,
    })
    .first();
}

function findMonthlyTotalsByUserId(userId) {
  return db("monthly_totals").where("user_id", userId);
}

function updateTotal(id, updated) {
  return db("monthly_totals")
    .where("id", id)
    .update(updated)
    .then(() => {
      return db("monthly_totals").where("id", id);
    });
}

function remove(id) {
  return db("monthly_totals").where("id", id).del();
}
