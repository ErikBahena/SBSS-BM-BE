const bcrypt = require("bcryptjs");
const { hashPassword } = require("../../api/auth/auth-helpers");

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
