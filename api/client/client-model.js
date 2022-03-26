const db = require("../../data/dbConfig");

async function addClient(newClient) {
  const user_id = newClient.user_id;

  const clientInfo = {
    first_name: newClient.first_name,
    last_name: newClient.last_name,
    email: newClient.email,
    phone: newClient.phone,
    user_id,
  };
  const clientAddress = {
    street: newClient.street,
    city: newClient.city,
    state: newClient.state,
    country: newClient.country,
    postal_code: newClient.postal_code,
  };

  return await db
    .transaction((trx) =>
      db("client as c")
        .transacting(trx)
        .insert(clientInfo)
        .returning("c.client_id")
        .then((insertedClientId) => {
          clientAddress.client_id = insertedClientId[0];

          db("client_address")
            .insert(clientAddress)
            .then(trx.commit)
            .catch(trx.rollback);
        })
        .catch(trx.rollback)
    )
    .then(() => {
      return getAll(user_id);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function deleteClient(client_id) {
  return await db("client").where({ client_id }).del();
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

module.exports = { addClient, findById, getAll, deleteClient };
