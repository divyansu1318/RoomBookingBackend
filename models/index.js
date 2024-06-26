const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rooms = require('./rooms.model')(sequelize, Sequelize);
db.bookings = require('./bookings.model')(sequelize, Sequelize);
db.users = require('./users.model')(sequelize, Sequelize);
db.tags = require('./tags.model')(sequelize, Sequelize);

module.exports = db;