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
      client.string("photo_url");

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
    })
    .createTable("employee", (employee) => {
      employee.increments("employee_id");

      employee.string("first_name").notNullable();
      employee.string("last_name").notNullable();
      employee.string("email").notNullable().unique();
      employee.string("phone").notNullable();
      employee.string("photo_url");

      employee
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("user")
        .onDelete("RESTRICT");

      employee.timestamps(true, true);
    })
    .createTable("employee_address", (table) => {
      table.increments("employee_address_id");

      table.string("street", 100).notNullable();
      table.string("city", 100).notNullable();
      table.string("postal_code", 10).notNullable();
      table.string("state", 30).notNullable();
      table.string("country", 50).notNullable();

      table
        .integer("employee_id")
        .unsigned()
        .notNullable()
        .references("employee_id")
        .inTable("employee")
        .onDelete("RESTRICT");
    })
    .createTable("job", (table) => {
      table.increments("job_id");

      table.string("title", 100).notNullable();
      table.string("description", 200).notNullable();
      table.timestamps(true, true);

      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("user")
        .onDelete("RESTRICT");

      table
        .integer("client_id")
        .unsigned()
        .notNullable()
        .references("client_id")
        .inTable("client")
        .onDelete("RESTRICT");
    })
    .createTable("job_employee", (table) => {
      table.increments("job_employee_id");
      table.timestamps(true, true);

      table
        .integer("job_id")
        .unsigned()
        .notNullable()
        .references("job_id")
        .inTable("job")
        .onDelete("RESTRICT");

      table
        .integer("employee_id")
        .unsigned()
        .notNullable()
        .references("employee_id")
        .inTable("employee")
        .onDelete("RESTRICT");
    })
    .createTable("job_employee_labor", (table) => {
      table.increments("job_employee_labor_id");

      table.timestamps(true, true);

      table.string("start").notNullable();
      table.string("end").notNullable();

      table.string("description").notNullable();

      table
        .integer("job_employee_id")
        .unsigned()
        .notNullable()
        .references("job_employee_id")
        .inTable("job_employee")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("job_employee_labor")
    .dropTableIfExists("job_employee")
    .dropTableIfExists("job")
    .dropTableIfExists("employee_address")
    .dropTableIfExists("employee")
    .dropTableIfExists("client_address")
    .dropTableIfExists("client")
    .dropTableIfExists("user_address")
    .dropTableIfExists("user");
};
