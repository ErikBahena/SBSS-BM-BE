exports.seed = function (knex) {
  return knex("users").insert([
    {
      email: "test@gmail.com",
      password: "test",
      user_id: 1,
    },
  ]);
};
