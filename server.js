require('dotenv').config();
const checkAuth = require('./middleware')

const cookieParser = require('cookie-parser');
const express = require('express');
const pgp = require('pg-promise')();
const cors = require('cors');
const bcrypt = require('bcrypt');
let date = new Date().toISOString();
const path = require('path');
const session = require('express-session');

const server = express();
server.use(express.json());
/* The line `server.use(express.static(path.resolve(__dirname + '/react-ui/index.html')));` is
configuring the server to serve static files from the specified directory. In this case, it is
serving the static files from the `react-ui` directory, specifically the `index.html` file. This
allows the server to serve the frontend of the application when the corresponding route is accessed. */
server.use(express.static(path.resolve(__dirname +  '/react-ui/dist')));

server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
        return res.send(204);
    }
        next();
    });


server.use(session({
    cookie: {
        secure: false,
        maxAge: 86400
    }, 
    resave: false,
    saveUninitialized: true,
    secret: 'pancake'
}))

// const cn = {
//     host: 'localhost',
//     port: 5432,
//     database: 'bookproject',
//     user: 'postgres',
//     password: 'grady',
//     allowedExitOnIdle: true,
// }

const db = pgp(process.env.ESQL);


server.get('/heartbeat', checkAuth, (req, res) => {
    res.json({message: 'heartbeat'})
})

server.get('/', (req, res) => {
    res.json({message: 'heartbeat'})
})


server.post('/api/setFavoriteGenres', async (req, res) => {
    const { _username, genres } = req.body;
    let userIdSearch = await db.query(`SELECT personid FROM users WHERE username='${_username}'`);
    let userId = userIdSearch[0].personid;
    db.query(`INSERT INTO favorites (personid, username, favoritegenres) VALUES ('${userId}', '${_username}', '${genres}')`);
    res.json({message: 'favorites set'})

})

server.post('/api/signup', async (req, res) => {
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
        res.json({
            username: username,
            isAuthenticated: true,
            redirectTo: '/account'
        })

    }
})

server.get('/api/verifyAuth', (req, res) => {
    res.json({isAuthenticated: !!req.session.user})
}),

server.post('/api/signin', async (req, res) => {
    const {username, email, password} = req.body;
    // let results = [];
    let search = await db.query(`SELECT * FROM users WHERE username='${username}'`);
    let search2 = await db.query(`SELECT * FROM users WHERE email='${email}'`);

    if (search.length > 0 || search2.length > 0) {
        const hashedpassword = await db.query(`SELECT password FROM users WHERE username='${username}'`);
        const matchup = await bcrypt.compare(password, hashedpassword[0].password);
        if (matchup === true) {
            req.session.user = search[0].username
            res.json({
                username: username,
                isAuthenticated: !!req.session.user,
                redirectTo: '/account'
            })
        } else if (matchup === false) {
        res.json({message: 'password is incorrect'})
    } else {
        res.json({message: 'user does not exist'})
    }
}
})


server.post('/api/account', async (req, res) => {
    console.log('/api/account')
    let { _username } = req.body;
    console.log(_username);
    let userIdQuery = await db.query(`SELECT personid FROM users where username='${_username}'`);
    console.log(userIdQuery);
    console.log(userIdQuery[0]);
    let userId = userIdQuery && userIdQuery[0].personid;
    let favorites = await db.query(`SELECT favoritegenres from favorites WHERE personid='${userId}'`);
    if (favorites && favorites.length > 0) {
        res.json(favorites);
        console.log(favorites);
    } else {
        res.json({message: "return modal"})
    }

})

server.get('*', (req, res) => {
    // console.log('hello')
    const filePath = path.resolve(__dirname, './react-ui/dist', 'index.html');
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(filePath);
});

const PORT = 8080;

server.listen(PORT, () => console.log(`This server is running at PORT ${PORT}`))