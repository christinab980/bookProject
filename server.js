require('dotenv').config();

const cookieParser = require('cookie-parser');
const express = require('express');
const pgp = require('pg-promise')();
const cors = require('cors');
const bcrypt = require('bcrypt');
let date = new Date().toISOString();
const path = require('path');

const server = express();
server.use(express.json());
/* The line `server.use(express.static(path.resolve(__dirname + '/react-ui/index.html')));` is
configuring the server to serve static files from the specified directory. In this case, it is
serving the static files from the `react-ui` directory, specifically the `index.html` file. This
allows the server to serve the frontend of the application when the corresponding route is accessed. */
server.use(express.static(path.resolve(__dirname +  '/react-ui/dist')));


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

server.get('/', (req, res) => {
    res.json({message: 'heartbeat'})
})

server.post('/signup', async (req, res) => {
    const {name, username, email, password, birthday} = req.body;
    /* The line `let search = await db.query(SELECT * FROM (users) WHERE (newUsername === username));`
    is attempting to perform a database query to search for a user with a matching `newUsername` and
    `username`. */
    let results = [];
    let search = await db.query(`SELECT * FROM users WHERE username='${username}'`);
    let search2 = await db.query(`SELECT * FROM users WHERE email='${email}'`);
    if (search && search.length > 0 || search2 && search2.length > 0) {
        results.push(search);
        results.push(search2);
        console.log(results.length);
    }

    if (results.length > 0) {
        console.log('error: user already exists');
        res.json('error: user already exists');
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        await db.query(`INSERT INTO users (name, username, password, email, birthday) VALUES ('${name}', '${username}', '${hashedpassword}', '${email}',  '${birthday}')`);
        console.log('running else');
        res.json({
            username: username,
            isAuthenticated: true,
            redirectTo: '/acccount'
        })

    }
})

server.post('/api/signin', async (req, res) => {
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

server.get('/api/favoriteGenres', async (req, res) => {
    let { username } = req.body;
    let userId = await db.query(`SELECT personid FROM users WHERE username='${username}'`)
    let favoriteGenres = await db.query(`SELECT favoritegenres FROM favorites WHERE personid='${userId}'`);
    res.json(favoriteGenres);
})

server.get('/account', async (req, res) => {
    let favorites = db.query(`SELECT * from favorites WHERE personid =`)
})

server.get('*', (req, res) => {
    console.log('hello')
    const filePath = path.resolve(__dirname, './react-ui/dist', 'index.html');
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(filePath);
});

const PORT = 8080;

server.listen(PORT, () => console.log(`This server is running at PORT ${PORT}`))