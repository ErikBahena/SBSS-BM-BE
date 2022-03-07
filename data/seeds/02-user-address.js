exports.seed = function (knex) {
  return knex("user_address").insert([
    {
      user_id: 1,
      street: "243 West Bryer Street",
      city: "Monte",
      state: "Washington",
      postal_code: "12345",
      country: "United States",
    },
  ]);
};
