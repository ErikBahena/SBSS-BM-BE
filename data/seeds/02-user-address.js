exports.seed = function (knex) {
  return knex("user_address").insert([
    {
      user_id: 1,
      street: "123 Guest Street",
      city: "Guestville",
      state: "default",
      postal_code: "11111",
      country: "Guest Land",
    },
  ]);
};
