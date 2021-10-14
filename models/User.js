const Sequelize = require('sequelize');
const { sequelize } = require('../db');
const { default: axios } = require("axios");

/** User of the site. */

const User = sequelize.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  },
  accessToken: {
    type: Sequelize.STRING
  }
});

User.sync({force: true})

module.exports = User;
