
exports.up = function(knex) {
    return knex.schema.createTable('tasks', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description').nullable();
        table.boolean('completed').defaultTo(false);
        table.timestamps(true, true);
      });
};


exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
};
