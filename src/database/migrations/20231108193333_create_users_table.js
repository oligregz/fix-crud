exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('full_name', 100);
    table.string('user_email', 100).notNullable();
    table.string('user_password', 200).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};