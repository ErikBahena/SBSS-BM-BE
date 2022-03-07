exports.up = function (knex) {
  return knex.schema
    .createTable("user", (users) => {
      users.increments("user_id");
      users.string("first_name").notNullable();
      users.string("last_name").notNullable();
      users.string("email").notNullable().unique();
      users.string("password", 200).notNullable();
      users.boolean("policy").notNullable();
      users.string("photo_url");
      users.string("phone");
    })
    .createTable("user_address", (table) => {
      table.increments("user_address_id");

      table.string("street", 100).notNullable();
      table.string("city", 100).notNullable();
      table.string("postal_code", 10).notNullable();
      table.string("state", 30).notNullable();
      table.string("country", 50).notNullable();

      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("user")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user_address")
    .dropTableIfExists("user");
};
