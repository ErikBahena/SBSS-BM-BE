const db = require("../../data/dbConfig");

async function addUser(newUser) {
  const [newUserId] = await db("users as u").insert(newUser).returning("u.*");

  return findById(newUserId);
}

async function findById(user_id) {
  return await db("users")
    .select("user_id", "photo_url", "email")
    .where("user_id", user_id)
    .first();
}

async function findBy(arg1, arg2) {
  return await db("users")
    .select("user_id", "email", "password", "photo_url")
    .where(arg1, arg2)
    .first();
}

async function editUser(user_id, newData) {
  return await db("users").update(newData).where("user_id", user_id);
}

async function deleteUser(user_id) {
  const deleted = await findById("user_id", id);
  await db("users").where("user_id", user_id).del();
  return deleted;
}

module.exports = {
  addUser,
  findById,
  editUser,
  deleteUser,
  findBy,
};
