'use strict'

module.exports = function(sequelize, DataTypes) {
  const League = sequelize.define("League", {
    //Auto incrementing leagueID will be automatically
    //defined by Sequelize
    leagueName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    //   len:[5-15]
      // validate: {
      //   len: [1]
    },
    leaguePlayers: {
      type: DataTypes.JSON,
    },
    leaguePoints: {
       type: DataTypes.INTEGER,
    },
    leagueStanding: {
        type: DataTypes.STRING,
    },
    leagueCurrentGames: {
      type: DataTypes.INTEGER,
    },
    // leagueAdminID: {
    //   type: DataTypes.STRING,
    // },
    // leaguePassword: {
    //   type: DataTypes.STRING,
    // }
  });

  League.associate = function(models) {
    // We're saying that a League should belong to an User(Admin).
    // A League can't be created without an User(Admin) due to the foreign key constraint
    League.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      // // ??Adam added following line to get around index.js error in order of processing of .js files
      onDelete: "cascade"
    });
  };

  League.associate = function(models) {
    // Associating League with Gameinfo
    // When a League is deleted, also delete any associated Gameinfo
    League.hasMany(models.Gameinfo, {
      onDelete: "cascade"
    });
  };

  return League;
};
