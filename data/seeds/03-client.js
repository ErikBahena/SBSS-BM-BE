exports.seed = function (knex) {
  return knex("client").insert([
    {
      email: "guestclient@gmail.com",
      first_name: "guest",
      last_name: "client",
      phone: "3608435534",
      user_id: 1,
    },
  ]);
};
