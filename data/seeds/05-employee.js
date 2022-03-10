exports.seed = function (knex) {
  return knex("employee").insert([
    {
      email: "guestemployee@gmail.com",
      first_name: "guest",
      last_name: "employee",
      phone: "3608435534",
      photo_url: "",
      user_id: 1,
    },
    {
      email: "guestemployee2@gmail.com",
      first_name: "guest2",
      last_name: "employee2",
      phone: "3608435533",
      photo_url: "",
      user_id: 1,
    },
  ]);
};
