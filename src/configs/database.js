/**
 * Database Config module.
 *
 * @module configs/database
 */

module.exports = {
  uri: process.env.DB_URI,
  options: {
    connectTimeoutMS: 30000, // Match default HTTP timeout
    socketTimeoutMS: 30000, // Match default HTTP timeout
    autoIndex: false, // You should use the db-indexes script to create the database indexes
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};
