exports.up = function (knex) {
  return knex.schema.createTable('posts', (tabela) => {
    tabela.increments('id').primary();
    tabela.integer('author_id').notNullable();
    tabela.string('post_text', 200);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('posts');
};

