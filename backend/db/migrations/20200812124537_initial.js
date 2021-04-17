const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames.json');

// Add created_at, updated_at and deleted at timestamps(datetime format)
async function addDefaults(table) {
  table.timestamps(false, true);

  table.datetime('deleted_at');
}

// Foreign Key constraint helper function
function reference(table, column, foreignTable) {
  table.integer(column).unsigned().notNullable();
  table.foreign(column).references('id').inTable(foreignTable);
}

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  // Self explaining code
  await knex.schema.createTable(tableNames.type, (table) => {
    table.increments().notNullable();
    table.string('name', 50).notNullable().unique();

    addDefaults(table);
  });

  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.string('username', 20).notNullable().unique();
    table.string('password', 80).notNullable().unique();

    table.string('role', 15).notNullable();

    addDefaults(table);
  });

  await knex.schema.createTable(tableNames.news, (table) => {
    table.increments().notNullable();

    table.string('link', 2000).notNullable();
    table.string('title', 50).notNullable();
    table.string('correction', 1000).notNullable();

    reference(table, 'type_id', tableNames.type);
    reference(table, 'user_id', tableNames.user);

    addDefaults(table);
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  // Exact order, if changed will break
  // Reverse from creation order
  await knex.schema.dropTableIfExists(tableNames.news);
  await knex.schema.dropTableIfExists(tableNames.type);
  await knex.schema.dropTableIfExists(tableNames.user);
};
