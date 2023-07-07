require('dotenv').config();

const cookieParser = require('cookie-parser');
const express = require('express');
const pgp = require('pg-promise')();
const cors = require('cors');
const bcrypt = require('bcrypt');
let date = new Date().toISOString();

const server = express();
server.use(express.json());


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
    const {newId, newName, newUsername, newEmail, newPassword, newBirthday} = req.body;
    /* The line `let search = await db.query(SELECT * FROM (users) WHERE (newUsername === username));`
    is attempting to perform a database query to search for a user with a matching `newUsername` and
    `username`. */
    let results = [];
    let search = await db.query(`SELECT * FROM users WHERE username='${newUsername}'`);
    let search2 = await db.query(`SELECT * FROM users WHERE email='${newEmail}'`);
    if (search && search.length > 0 || search2 && search2.length > 0) {
        results.push(search);
        results.push(search2);
        console.log(results.length);
    }

    if (results.length > 0) {
        console.log('error: user already exists');
        res.json('error: user already exists');
    } else {
        console.log(newPassword);
        console.log(newEmail);
        console.log(newUsername);
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(newPassword, salt);
        await db.query(`INSERT INTO users (personid, name, username, password, email, birthday) VALUES (${newId}, '${newName}', '${newUsername}', '${hashedpassword}', '${newEmail}',  '${newBirthday}')`);
        console.log('running else');
        res.json({message: 'joined successfully'})

    }
})

server.post('/signin', async (req, res) => {
    const {username, email, password} = req.body;
    // let results = [];
    let search = await db.query(`SELECT * FROM users WHERE username='${username}'`);
    let search2 = await db.query(`SELECT * FROM users WHERE email='${email}'`);
    console.log(search2)
    if (search.length > 0 || search2.length > 0) {
        const hashedpassword = await db.query(`SELECT password FROM users WHERE username='${username}'`);
        console.log(password);
        console.log(hashedpassword)
        const matchup = await bcrypt.compare(password, hashedpassword[0].password);
        if (matchup) {
            res.json({
                username: username,
                isAuthenticated: true,
                redirectTo: '/acccount'
            })
        }
    } else {
        res.json({message: 'user does not exist'})
    }
})

server.get('/account', async (req, res) => {
    let favorites = db.query(`SELECT * from favorites WHERE personid =`)
})

const PORT = 8080;

server.listen(PORT, () => console.log(`This server is running at PORT ${PORT}`))