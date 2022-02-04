const publics = require('./public');
const users = require('./user')
const admin = require('./admin')
const auth = require('./auth');

const setupRoutes = (app) => {
  app.use("/", publics);
  app.use("/users", users);
  app.use("/admin", admin);
  app.use('/auth', auth);
};

module.exports = setupRoutes;
