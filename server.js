require('dotenv').config();

const cookieParser = require('cookie-parser');
const express = require('express');
const pgp = require('pg-promise')();
const cors = require('cors');
const bcrypt = require('bcrypt');
let date = new Date().toISOString();

const server = express();

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'bookproject',
    user: 'postgres',
    password: 'grady',
    allowedExitOnIdle: true,
}

const db = pgp(cn);


server.get('/heartbeat', (req, res) => {
    res.json({message: 'heartbeat'})
})

server.post('/signup', async (req, res) => {
    const {name, newUsername, email, password, birthday} = req.body;
    /* The line `let search = await db.query(SELECT * FROM (users) WHERE (newUsername === username));`
    is attempting to perform a database query to search for a user with a matching `newUsername` and
    `username`. */
    let search = await db.query(`SELECT * FROM (users) WHERE (${newUsername} === username)`);
    console.log(search);
})

const PORT = 8080;

server.listen(PORT, () => console.log(`This server is running at PORT ${PORT}`))