const bcrypt = require("bcryptjs");
const { BCRYPT_ROUNDS } = require("../../config");

const hashPassword = (originalPassword) => {
  return bcrypt.hashSync(originalPassword, BCRYPT_ROUNDS);
};

exports.seed = function (knex) {
  return knex("user").insert([
    {
      email: "erikjbahena@gmail.com",
      first_name: "ErIk",
      last_name: "BahEna Zuniga",
      password: hashPassword("erik"),
      policy: true,
      photo_url: "https://avatars.githubusercontent.com/u/80177106?v=4",
    },
  ]);
};
