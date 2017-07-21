const bodyParser = require('body-parser');
// const cors = require('cors');

const express = require('express');
const db = require('./src/database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());

app.set('port', (process.env.PORT || 3001));

// Express only servers static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Method', 'Get, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-with, content-type');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//for users
app.post('/api/carry_me/users', db.createUser);
app.get('/api/carry_me/users', db.readAllUser);
app.get('/api/carry_me/users/:user_email', db.readUser);
app.put('/api/carry_me/users/:user_id', db.updateUser);
app.delete('/api/carry_me/users/:user_id', db.deleteUser);

//for posts
// app.post('/api/carry_me/posts', db.createPost);
// app.get('/api/carry_me/posts', db.readAllPost);
// app.get('/api/carry_me/posts/:user_email', db.readPost);
// app.put('/api/carry_me/posts/:user_id', db.updatePost);
// app.delete('/api/carry_me/posts/:user_id', db.deletePost);

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); 
});
