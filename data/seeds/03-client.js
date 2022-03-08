exports.seed = function (knex) {
  return knex("client").insert([
    {
      email: "guestclient@gmail.com",
      first_name: "guest",
      last_name: "client",
      phone: "3608435534",
      photo_url: "",
      user_id: 1,
    },
    {
      email: "guestclient2@gmail.com",
      first_name: "guest2",
      last_name: "client2",
      phone: "3608435533",
      photo_url: "",
      user_id: 1,
    },
  ]);
};
