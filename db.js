// Database setup for users
const { DB_URI } = require("./config");
const { Client } = require('pg');
const Sequelize = require("sequelize");
const sequelize = new Sequelize(DB_URI);  

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Sequelize connection successful");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to database:", err);
//   });

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = {
  db,
  sequelize
};