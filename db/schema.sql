create database magicDB;
use magicDB;

CREATE TABLE IF NOT EXISTS `Users` (`id` INTEGER NOT NULL auto_increment , `email` VARCHAR(255) NOT NULL UNIQUE,
`password` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`))
ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Leagues` (`id` INTEGER NOT NULL auto_increment , `leagueName` VARCHAR(255), `leaguePlayers` JSON,
`leaguePoints` INTEGER, `leagueStanding` VARCHAR(255), `leagueCurrentGames` INTEGER, `createdAt` DATETIME NOT NULL,
`updatedAt` DATETIME NOT NULL, `UserId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`UserId`)
REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Gameinfos` (`id` INTEGER NOT NULL auto_increment , `playerName` VARCHAR(255), `checkedIn` TINYINT(1),
`commander` VARCHAR(255), `assignedTable` INTEGER NOT NULL, `points` INTEGER, `createdAt` DATETIME NOT NULL,
`updatedAt` DATETIME NOT NULL, `LeagueId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`LeagueId`)
REFERENCES `Leagues` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
