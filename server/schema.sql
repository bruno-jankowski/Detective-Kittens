CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  contents TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, contents)
VALUES 
('My First Note', 'A note about something'),
('My Second Note', 'A note about something else');


USE notes_app;

CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  password TEXT NOT NULL
);

INSERT INTO users (name, password)
VALUES 
('user1', 'pass1'),
('user2', 'pass2');


Comping up hot we got 

DELETE FROM notes 
WHERE id='1'

DELETE FROM users 
WHERE name='bruno';