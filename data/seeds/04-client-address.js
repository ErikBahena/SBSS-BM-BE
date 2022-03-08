exports.seed = function (knex) {
  return knex("client_address").insert([
    {
      client_id: 1,
      street: "123 Guest Street",
      city: "Guestville",
      state: "default",
      postal_code: "11111",
      country: "Guest Land",
    },
  ]);
};
