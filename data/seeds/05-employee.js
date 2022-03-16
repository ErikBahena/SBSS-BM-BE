exports.seed = function (knex) {
  return knex("employee").insert([
    {
      user_id: 1,
      email: "id.risus@icloud.org",
      first_name: "Cheryl",
      last_name: "Ashley",
      phone: "(135) 339-4965",
    },
    {
      user_id: 1,
      email: "ac.arcu@protonmail.com",
      first_name: "Wallace",
      last_name: "Bradford",
      phone: "(686) 818-3252",
    },
    {
      user_id: 1,
      email: "luctus@icloud.org",
      first_name: "Nevada",
      last_name: "Roach",
      phone: "1-576-538-2158",
    },
    {
      user_id: 1,
      email: "leo.in.lobortis@protonmail.net",
      first_name: "Kaseem",
      last_name: "Knowles",
      phone: "1-682-447-2586",
    },
    {
      user_id: 1,
      email: "dis.parturient@outlook.edu",
      first_name: "Germaine",
      last_name: "Peters",
      phone: "(513) 349-6554",
    },
  ]);
};
