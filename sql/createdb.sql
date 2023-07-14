CREATE DATABASE bookproject;
\c bookproject;
CREATE TABLE users (personid INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name VARCHAR(250), username VARCHAR(250), password VARCHAR(250), email VARCHAR(250), birthday DATE);
CREATE TABLE favorites (personid INT, username VARCHAR(250), favoritegenres VARCHAR(1000), favoritebooks VARCHAR(250), FOREIGN KEY (personid) REFERENCES users(personid));
CREATE TABLE books (bookid INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title VARCHAR(250));
CREATE TABLE reviews (reviewid INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, username VARCHAR(250), booktitle VARCHAR(250), bookid INT, bookreview JSON, FOREIGN KEY (bookid) REFERENCES books(bookid));

 