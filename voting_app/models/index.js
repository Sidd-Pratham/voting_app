const { Sequelize } = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, Sequelize);
db.Candidate = require('./candidate.model')(sequelize, Sequelize);
db.Vote = require('./vote.model')(sequelize, Sequelize);

db.User.hasMany(db.Vote);
db.Candidate.hasMany(db.Vote);

db.Vote.belongsTo(db.User);
db.Vote.belongsTo(db.Candidate);

module.exports = db;
