/**
 * Schemas Component module.
 *
 * @module components/schemas
 */

const schemas = require('../configs/schemas');
const chalk = require('chalk');

/**
 * Registers all schemas into the connection.
 *
 * @param {Object} conn The database connection object.
 */
function register(conn, db = 'default') {
  for (let name of Object.keys(schemas)) {
    conn.model(name, schemas[name]);
  }

  if (process.env.NODE_ENV === 'local') {
    console.log(chalk.blue('Listas de Schemas de ' + db));
    console.log('============================================================');

    Object.keys(conn.models).forEach((item) => {
      console.log(chalk.green(item));
    });

    console.log('============================================================');
  }
}

module.exports = {
  register,
};
