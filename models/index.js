const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.timezones = require("./timezone.model")(sequelize, Sequelize);
db.invoices = require("./invoice.model")(sequelize, Sequelize);
db.locales = require("./locales.model")(sequelize, Sequelize);
db.vocabulary = require('./vocabulary.model')(sequelize, Sequelize);
module.exports = db;
