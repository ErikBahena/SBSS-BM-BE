const db = require("../../data/dbConfig");

async function addClient(newClient) {
  const [newClientId] = await db("client as c")
    .insert(newClient)
    .returning("c.*");

  return findById(newClientId);
}

async function findById(client_id) {
  return await db("client as c")
    .select(
      "c.client_id",
      "c.first_name",
      "c.last_name",
      "c.email",
      "c.photo_url",
      "c.created_at",
      "ca.client_address_id",
      "ca.street",
      "ca.state",
      "ca.country",
      "ca.city",
      "ca.postal_code"
    )
    .where("c.client_id", client_id)
    .first()
    .leftJoin("client_address as ca", "c.client_id", "ca.client_address_id");
}
async function getAll(user_id) {
  return await db("user as u")
    .select(
      "c.client_id",
      "c.first_name",
      "c.last_name",
      "c.email",
      "c.phone",
      "c.photo_url",
      "c.created_at",

      "ca.client_address_id",
      "ca.street",
      "ca.state",
      "ca.country",
      "ca.city",
      "ca.postal_code"
    )
    .where("c.user_id", user_id)
    .leftJoin("client as c", "u.user_id", "c.user_id")
    .leftJoin("client_address as ca", "c.client_id", "ca.client_id");
}

module.exports = { addClient, findById, getAll };
