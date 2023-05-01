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

CREATE TABLE parties (
  id integer PRIMARY KEY AUTO_INCREMENT,
  players JSON

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


UPDATE users SET friends = JSON_ARRAY_APPEND(friends, '$', ?) WHERE name = ?


UPDATE users SET avatar = 123 WHERE name = 'bruno_2005';


UPDATE users
SET friends = JSON_REMOVE(friends, JSON_UNQUOTE(JSON_SEARCH(friends, 'one', 'bruno2005', NULL, '$[*]')))
WHERE name = bruno_2005;

UPDATE parties
SET friends = JSON_REMOVE(friends, JSON_UNQUOTE(JSON_SEARCH(friends, 'one', 'bruno2005', NULL, '$[*]')))
WHERE name = bruno_2005;


INSERT INTO parties (players)
VALUES ('[?]')

####
to find party 

SELECT * FROM parties WHERE JSON_SEARCH(players, 'one', 'newBruno') IS NOT NULL;

ALTER TABLE parties ADD COLUMN name VARCHAR(255) NOT NULL DEFAULT '';
ALTER TABLE users ADD COLUMN sent VARCHAR(255) NOT NULL DEFAULT '[]';


//new functions
//adding reqsent
UPDATE users SET sent = JSON_ARRAY_APPEND(sent, '$', 'new req') WHERE name = 'test';
//ading reqrecived
UPDATE users SET requests = JSON_ARRAY_APPEND(requests, '$', 'new req') WHERE name = 'test';

//removing req
UPDATE users
SET sent = JSON_REMOVE(sent, JSON_UNQUOTE(JSON_SEARCH(sent, 'one', 'new req', NULL, '$[*]')))
WHERE name = 'test';

//delete all
UPDATE users SET sent = '[]'; 