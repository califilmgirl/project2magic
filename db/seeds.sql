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

INSERT INTO `Users` (`id`,`email`,`password`,`createdAt`,`updatedAt`)
VALUES
(DEFAULT,'test@gmail.com','$2a$10$52cI1hicMAMs/AESBoFU5uOEstJgySkYpvj/1arlxsEKCBWI9Beum','2018-03-14 22:25:48','2018-03-14 22:25:48'),
(DEFAULT,'vanessa@gmail.com','$2a$10$.9CrkCVl21mq3pp0qfdvpurfn2gnlNwerGrDOovGnrUTLTZm68KzO','2018-03-14 22:31:58','2018-03-14 22:31:58'),
(DEFAULT,'matt@gmail.com','$2a$10$HKawFSBKM823ae0bWulgBeu5Sks1Y0eF34OYe6saJHs93H1Ki/tFq','2018-03-15 19:46:13','2018-03-15 19:46:13'),
(DEFAULT,'jack@gmail.com','$2a$10$HQrp8AuxvTZrklms6NUHK.4StyT1gdaSBYlj5vlOXoeZ.thLtbWc2','2018-03-14 22:34:26','2018-03-14 22:34:26');

INSERT INTO `Leagues` (`id`,`leagueName`,`leaguePlayers`,`leaguePoints`,`leagueStanding`,`leagueCurrentGames`,`createdAt`,`updatedAt`, `UserId`)
VALUES
(NULL,'Austinerds','[\"Vanessa\",\"Fred\",\"Matt\",\"Bob\",\"Venkat\",\"Keith\",\"Doug\"]',85,'First',3,'2018-03-14 21:45:47','2018-03-14 21:45:47',2),
(NULL,'Cowboys','[\"Jill\",\"Jack\",\"Jim\",\"Joey\",\"Joseph\",\"Jeb\"]',35,'Second',2,'2018-03-14 21:45:47','2018-03-14 21:45:47',3);

INSERT INTO `Gameinfos` (`id`,`playerName`,`checkedIn`,`commander`,`assignedTable`,`points`,`createdAt`,`updatedAt`,`LeagueId`)
VALUES
(NULL,'Vanessa',true,'Freya',1,5,'2018-03-14 22:46:24','2018-03-14 22:46:24',1),
(NULL,'Matt',true,'Mogus',1,6,'2018-03-14 22:46:24','2018-03-14 22:46:24',1);
