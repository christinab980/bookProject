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

const PORT = 8080;

server.listen(PORT, () => console.log(`This server is running at PORT ${PORT}`))