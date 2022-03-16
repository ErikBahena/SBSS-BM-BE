const db = require("../../data/dbConfig");

const defaultAddress = {
  street: "",
  city: "",
  postal_code: "",
  state: "default",
  country: "",
};

async function addUser(newUser) {
  const createdUser = await db
    .transaction(function (trx) {
      db("user as u")
        .insert(newUser)
        .returning("u.user_id")
        .then((newUserId) => {
          db("user_address as ua")
            .insert({
              ...defaultAddress,
              user_id: newUserId[0],
            })
            .returning("ua.user_id")
            .then(trx.commit)
            .catch(trx.rollback);
        })
        .catch(trx.rollback);
    })
    .then((newUserId) => findBy("u.user_id", newUserId[0]))
    .catch(function (err) {
      return Promise.reject(err);
    });

  return createdUser;
}

async function findById(user_id) {
  return await db("user")
    .select("user_id", "first_name", "last_name", "email", "photo_url")
    .where("user_id", user_id)
    .first();
}

async function findBy(arg1, arg2) {
  return await db("user as u")
    .select(
      "u.user_id",
      "u.first_name",
      "u.last_name",
      "u.email",
      "u.password",
      "u.photo_url",
      "u.phone",
      "ua.state",
      "ua.street",
      "ua.city",
      "ua.postal_code",
      "ua.country",
      "ua.user_address_id"
    )
    .where(arg1, arg2)
    .first()
    .leftJoin("user_address as ua", "u.user_id", "ua.user_id");
}

async function updateUser(user_id, user_address_id, userAccount, userAddress) {
  const updatedUser = await db
    .transaction(function (trx) {
      db("user")
        .transacting(trx)
        .update(userAccount)
        .where("user_id", user_id)
        .then(() => {
          db("user_address as ua")
            .update(userAddress)
            .where("ua.user_address_id", user_address_id)
            .then(trx.commit)
            .catch(trx.rollback);
        })
        .catch(trx.rollback);
    })
    .then(() => findBy("u.user_id", user_id))
    .catch(function (err) {
      return Promise.reject(err);
    });

  return updatedUser;
}

async function deleteUser(user_id) {
  const deleted = await findById("user_id", id);

  await db("user").where("user_id", user_id).del();

  return deleted;
}

module.exports = {
  addUser,
  findById,
  updateUser,
  deleteUser,
  findBy,
};
