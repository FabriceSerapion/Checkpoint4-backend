const db = require('../models');
const datasUser = require('./user');
const datasCategory = require('./category');
const datasContenu = require('./contenu');
const datasPlatform = require('./platform');

const ENV = process.env.NODE_ENV;
if (ENV === 'DEV') {
  db.sequelize.sync({ force: true }).then(() => {
    console.log('Resync Db');
    datasUser(db);
    datasCategory(db);
    datasPlatform(db);
    datasContenu(db);
  });
}
