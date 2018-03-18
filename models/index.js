'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

console.log("Reaching fs");
console.log(
              fs
              .readdirSync(__dirname)
              .filter(function(file) {
                return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
              })
            );

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
    console.log("db: ",db);
  });
console.log("db: ",db);
console.log("Reaching Object.keys");

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

console.log("models in db: ", db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Coding Schema Relations
// require('../models/gameInfo.js')(sequelize, Sequelize);
// require('../models/league.js')(sequelize, Sequelize);
// db.gameInfo.belongsTo(db.league);  
// db.league.hasMany(db.gameInfo);

module.exports = db;
