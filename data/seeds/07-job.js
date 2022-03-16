exports.seed = function (knex) {
  return knex("job").insert([
    {
      title: "Interior Paint Job at Mikes",
      description:
        "Phasellus at augue id ante dictum cursus. Nunc mauris elit, lef sadf. To ther and where we there here",
      client_id: 1,
      user_id: 1,
    },
    {
      title: "tincidunt. Donec vitae",
      description: "eu tellus eu augue porttitor interdum. Sed auctor odio a",
      client_id: 2,
      user_id: 1,
    },
    {
      title: "risus. Duis a",
      description:
        "fermentum metus. Aenean sed pede nec ante blandit viverra. Donec",
      client_id: 3,
      user_id: 1,
    },
    {
      title: "congue turpis. In",
      description:
        "diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat.",
      client_id: 4,
      user_id: 1,
    },
    {
      title: "nibh vulputate mauris",
      description: "elit, a feugiat tellus lorem eu metus. In lorem. Donec",
      client_id: 5,
      user_id: 1,
    },
  ]);
};
