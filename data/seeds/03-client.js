exports.seed = function (knex) {
  return knex("client").insert([
    {
      first_name: "Breanna",
      last_name: "Kinney",
      email: "maecenas@protonmail.edu",
      user_id: 1,
      phone: "1-974-392-0754",
    },
    {
      first_name: "Eaton",
      last_name: "Lane",
      email: "ligula.eu@hotmail.com",
      user_id: 1,
      phone: "1-245-626-9333",
    },
    {
      first_name: "Keane",
      last_name: "Kane",
      email: "cum.sociis.natoque@protonmail.net",
      user_id: 1,
      phone: "(426) 210-7266",
    },
    {
      first_name: "Amal",
      last_name: "Christian",
      email: "a.mi.fringilla@google.org",
      user_id: 1,
      phone: "(676) 503-1172",
    },
    {
      first_name: "Shelly",
      last_name: "Finch",
      email: "nec.malesuada.ut@icloud.net",
      user_id: 1,
      phone: "(684) 291-2938",
    },
  ]);
};
