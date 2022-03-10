exports.seed = function (knex) {
  return knex("employee_address").insert([
    {
      employee_id: 1,
      street: "123 Guest Street",
      city: "workville",
      state: "default",
      postal_code: "11111",
      country: "Work Land",
    },
  ]);
};
