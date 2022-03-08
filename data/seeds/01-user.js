const bcrypt = require("bcryptjs");
const { BCRYPT_ROUNDS } = require("../../config");

const hashPassword = (originalPassword) => {
  return bcrypt.hashSync(originalPassword, BCRYPT_ROUNDS);
};

exports.seed = function (knex) {
  return knex("user").insert([
    {
      email: "guest@gmail.com",
      first_name: "guest",
      last_name: "account",
      password: hashPassword("guestPassword!!221"),
      policy: true,
    },
  ]);
};
