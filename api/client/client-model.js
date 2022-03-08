const db = require("../../data/dbConfig");

async function addUser(newClient) {
  const [newClientId] = await db("user as u")
    .insert(newClient)
    .returning("u.*");

  return findById(newClientId);
}

async function findById(client_id) {
  return await db("client")
    .select("client_id", "first_name", "last_name", "email", "photo_url")
    .where("client_id", client_id)
    .first();
}

module.exports = { addUser, findById };
