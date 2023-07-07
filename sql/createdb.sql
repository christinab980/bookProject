CREATE DATABASE bookproject;
\c bookproject;
CREATE TABLE users (personid INT, name VARCHAR(250), username VARCHAR(250), password VARCHAR(250), email VARCHAR(250), birthday DATE, PRIMARY KEY (personid));
CREATE TABLE favorites (personid INT, username VARCHAR(250), favoritegenres VARCHAR(250), favoritebooks VARCHAR(250), PRIMARY KEY (personid), FOREIGN KEY (personid) REFERENCES users(personid));
CREATE TABLE books (bookid INT, title VARCHAR(250), PRIMARY KEY (bookid));
CREATE TABLE reviews (reviewid INT, username VARCHAR(250), booktitle VARCHAR(250), bookid INT, bookreview JSON, PRIMARY KEY (reviewid), FOREIGN KEY (bookid) REFERENCES books(bookid));
INSERT INTO users (personid, name, username, password, email, birthday) VALUES (1, 'bob', 'bob123@gmail.com', 'temppass', 'bob123@gmail.com', '01.01.2001');
INSERT INTO favorites (personid, username, favoritegenres, favoritebooks) VALUES (1, 'bob123@gmail.com', 'Horror', 'horror book');