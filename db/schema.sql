/*
  - Drop db if it exists already
  - Create db if db does not exists
  - Use the db
*/
DROP DATABASE IF EXISTS hazPorpoise;
CREATE DATABASE IF NOT EXISTS hazPorpoise;
USE hazPorpoise;

CREATE TABLE storeData (
  id INT AUTO_INCREMENT PRIMARY KEY,
  storeAddress VARCHAR(100) NOT NULL,
  timeDate VARCHAR(100) NOT NULL,
  didSellOut BOOLEAN NOT NULL,
  sellOutDate VARCHAR(20),
  sellOutTime INT 
);