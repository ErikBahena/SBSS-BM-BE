exports.up = function (knex) {
  return knex.schema
    .createTable("user", (user) => {
      user.increments("user_id");
      user.string("first_name").notNullable();
      user.string("last_name").notNullable();
      user.string("email").notNullable().unique();
      user.string("password", 200).notNullable();
      user.boolean("policy").notNullable();
      user.string("photo_url");
      user.string("phone");

      user.timestamps(true, true);
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
    })
    .createTable("client", (client) => {
      client.increments("client_id");

      client.string("first_name").notNullable();
      client.string("last_name").notNullable();
      client.string("email").notNullable().unique();
      client.string("phone").notNullable();

      client
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("user")
        .onDelete("RESTRICT");

      client.timestamps(true, true);
    })
    .createTable("client_address", (table) => {
      table.increments("client_address_id");

      table.string("street", 100).notNullable();
      table.string("city", 100).notNullable();
      table.string("postal_code", 10).notNullable();
      table.string("state", 30).notNullable();
      table.string("country", 50).notNullable();

      table
        .integer("client_id")
        .unsigned()
        .notNullable()
        .references("client_id")
        .inTable("client")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("client_address")
    .dropTableIfExists("client")
    .dropTableIfExists("user_address")
    .dropTableIfExists("user");
};
