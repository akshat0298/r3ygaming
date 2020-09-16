const Sequelize = require('sequelize');

const sequelize = require('../../config/database');


const tableName = 'games';

const Games = sequelize.define('Games', {
  name: {
    type: Sequelize.STRING,
    unique: false,
  },
  description: {
    type: Sequelize.STRING,
  },
}, { tableName });

// eslint-disable-next-line
Games.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  // delete values.password;

  return values;
};

module.exports =Games;
