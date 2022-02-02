const Sequelize = require("sequelize");
const config = require("../config/db.config");

const ENV = process.env.NODE_ENV;

const sequelize = new Sequelize(
  config[ENV].DB,
  config[ENV].USER,
  config[ENV].PASSWORD,
  {
    host: config[ENV].HOST,
    dialect: config[ENV].dialect,
    operatorsAliases: 0,
    autoreconnect: 1,
    pool: {
      max: config[ENV].pool.max,
      min: config[ENV].pool.min,
      acquire: config[ENV].pool.acquire,
      idle: config[ENV].pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, Sequelize);
db.categorie = require("./categorie")(sequelize, Sequelize);
db.contenu = require("./contenu")(sequelize, Sequelize);

db.user.belongsToMany(db.contenu, {
  through: "UserContenu",
});

db.contenu.belongsToMany(db.user, {
  through: "UserContenu",
});

// DOUBLE LA FOREIGN KEY DE CATEGORIE DANS LA TABLE CONTENU 
// NECESSAIRE OU JE PEUX ME CONTENTER DU CHAMP CATEGORIE_ID QUI EST DANS LE MODEL ???

// db.categorie.hasMany(db.contenu);
// db.contenu.belongsTo(db.categorie);

module.exports = db;