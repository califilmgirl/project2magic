'use strict'

module.exports = function(sequelize, DataTypes){
  var Gameinfo = sequelize.define("Gameinfo", {
    //playerID will be generated automatically by Sequelize
    playerName: {
        type: DataTypes.STRING,
    },
    checkedIn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    commander: {
        type: DataTypes.STRING,
        },
    assignedTable: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    points:{
        type: DataTypes.INTEGER,
        required: false
        }
  });

  Gameinfo.associate = function(models) {
    // We're saying that a Gameinfo should belong to a League
    // A Gameinfo can't be created without a League due to the foreign key constraint
    Gameinfo.belongsTo(models.League, {
      foreignKey: {
        allowNull: false
      },
      // Adam added following line to get around index.js error in order of processing of .js files
      onDelete: "cascade"
    });
  };

  return Gameinfo;
};
