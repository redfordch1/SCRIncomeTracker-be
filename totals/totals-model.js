const db = require("../DBconfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findTotalsByUserId,
  updateTotal,
  remove,
};

function add(total) {
  return db("totals").insert(total);
}

function find() {
  // return db("totals").select("*");
  return db("totals").select("*");
}

function findBy(filter) {
  return db("totals").where(filter);
}

function findById(id) {
  return db("totals")
    .where({
      id,
    })
    .first();
}

function findTotalsByUserId(userId) {
  return db("totals").where("user_id", userId);
}

function updateTotal(id, updated) {
  return db("totals")
    .where("id", id)
    .update(updated)
    .then(() => {
      return db("totals").where("id", id);
    });
}

function remove(userId) {
  return db("totals").where("user_id", userId).del("*");
}
