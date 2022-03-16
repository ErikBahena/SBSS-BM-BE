exports.seed = function (knex) {
  return knex("employee_address").insert([
    {
      employee_id: 1,
      street: "481-4328 Tempus Street",
      city: "Ryazan",
      state: "oregon",
      postal_code: "32585",
      country: "United States",
    },
    {
      employee_id: 2,
      street: "Ap #875-9752 Nulla. St.",
      city: "Shostka",
      state: "alabama",
      postal_code: "8252",
      country: "United States",
    },
    {
      employee_id: 3,
      street: "Ap #694-3901 Duis Rd.",
      city: "Seletar",
      state: "alabama",
      postal_code: "5632",
      country: "United States",
    },
    {
      employee_id: 4,
      street: "Ap #427-172 In, Rd.",
      city: "Pervomaisk",
      state: "oregon",
      postal_code: "78-92",
      country: "United States",
    },
    {
      employee_id: 5,
      street: "P.O. Box 331, 7434 Commodo Ave",
      city: "Sokoto",
      state: "default",
      postal_code: "47-32",
      country: "United States",
    },
  ]);
};
