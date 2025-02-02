// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    seeds:{
      directory: './src/database/seeds'
    },
    useNullAsDefault: true
  }
};
