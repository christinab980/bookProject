CREATE DATABASE bookproject;
\c bookproject;
CREATE TABLE users (name VARCHAR(250), username VARCHAR(250), password VARCHAR(250), email VARCHAR(250), birthday DATE);
INSERT INTO users (name, username, password, email, birthday) VALUES ('bob', 'bob123@gmail.com', 'temppass', 'bob123@gmail.com', '01.01.2001');