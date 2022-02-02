const publics = require('./public');
const users = require('./user')
const admin = require('./admin')


const setupRoutes = (app) => {
  app.use("/", publics);
  app.use("/users", users)
  app.use("/admin", admin)
};

module.exports = setupRoutes;
