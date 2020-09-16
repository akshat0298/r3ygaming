const privateRoutes = require('./routes/privateRoutes');
const publicRoutes = require('./routes/publicRoutes');
const gamesRoutes = require('./routes/gamesRoutes');

const config = {
  migrate: false,
  privateRoutes,
  publicRoutes,
  gamesRoutes,
  port: process.env.PORT || '2020',
};

module.exports = config;
