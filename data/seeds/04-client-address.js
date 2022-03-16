exports.seed = function (knex) {
  return knex("client_address").insert([
    {
      client_id: 1,
      street: "186-5140 Pulvinar St.",
      city: "Itagüí",
      state: "nevada",
      postal_code: "817992",
      country: "United States",
    },
    {
      client_id: 2,
      street: "974-1586 Phasellus Av.",
      city: "Mercedes",
      state: "alabama",
      postal_code: "92633",
      country: "United States",
    },
    {
      client_id: 3,
      street: "P.O. Box 264, 2878 Sollicitudin Ave",
      city: "León",
      state: "nevada",
      postal_code: "88561",
      country: "United States",
    },
    {
      client_id: 4,
      street: "695-6510 Dolor St.",
      city: "Chandigarh",
      state: "alabama",
      postal_code: "1996",
      country: "United States",
    },
    {
      client_id: 5,
      street: "P.O. Box 706, 1553 Lectus Rd.",
      city: "Ila",
      state: "nevada",
      postal_code: "24015",
      country: "United States",
    },
  ]);
};
