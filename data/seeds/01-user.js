const { hashPassword } = require("../../api/auth/auth-helpers");

exports.seed = async function (knex) {
  return knex("user").insert([
    {
      email: "guest@gmail.com",
      first_name: "guest",
      last_name: "account",
      password: await hashPassword("guestPassword!!221"),
      policy: true,
    },
  ]);
};
