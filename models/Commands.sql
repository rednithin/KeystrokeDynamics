DROP TABLE IF EXISTS `Reports`;
DROP TABLE IF EXISTS `Posts`;
DROP TABLE IF EXISTS `Followings`;
DROP TABLE IF EXISTS `Users`;
DROP TABLE IF EXISTS `Admins`;

CREATE TABLE IF NOT EXISTS `Admins` (
  `id` INTEGER NOT NULL auto_increment , 
  `name` VARCHAR(150), 
  `email` VARCHAR(150) UNIQUE, 
  `password` VARCHAR(5000), 
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  `updatedAt` DATETIME NOT NULL ON UPDATE CURRENT_TIMESTAMP, 
  UNIQUE `Admins_email_unique` (`email`), 
  PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Users` (
  `id` INTEGER NOT NULL auto_increment , 
  `name` VARCHAR(150), `email` VARCHAR(150) UNIQUE, 
  `password` VARCHAR(5000), 
  `rhythm` VARCHAR(5000), 
  `phone` VARCHAR(10), 
  `gender` CHAR(10), 
  `age` VARCHAR(10), 
  `status` VARCHAR(2000), 
  `objective` VARCHAR(2000), 
  `createdAt` DATETIME NOT NULL, 
  `updatedAt` DATETIME NOT NULL, 
  UNIQUE `Users_email_unique` (`email`), 
  PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Followings` (
  `id` INTEGER NOT NULL auto_increment , 
  `createdAt` DATETIME NOT NULL, 
  `updatedAt` DATETIME NOT NULL, 
  `UserId` INTEGER, 
  `FollowingId` INTEGER, 
  PRIMARY KEY (`id`), 
  FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, 
  FOREIGN KEY (`FollowingId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Posts` (
  `id` INTEGER NOT NULL auto_increment , 
  `title` VARCHAR(150), 
  `description` VARCHAR(5000), 
  `createdAt` DATETIME NOT NULL, 
  `updatedAt` DATETIME NOT NULL, 
  `UserId` INTEGER, 
  PRIMARY KEY (`id`), 
  FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Reports` (
  `id` INTEGER NOT NULL auto_increment , 
  `createdAt` DATETIME NOT NULL, 
  `updatedAt` DATETIME NOT NULL, 
  `UserId` INTEGER, 
  `ReportedId` INTEGER, 
  PRIMARY KEY (`id`), 
  FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, 
  FOREIGN KEY (`ReportedId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;

INSERT INTO `Admins` (`id`,`name`,`email`,`password`,`createdAt`,`updatedAt`) VALUES (
  DEFAULT,
  'Nithin Reddy',
  'red@gmail.com',
  '$2a$08$GTDWiZhkacEyj0IJRw31h.c4VTj0.H4eli15XSVsrT8WDjeNAgOJy',
  '2017-11-02 15:56:25',
  '2017-11-02 15:56:25');
