const bodyParser = require('body-parser');

const express = require('express');
const db = require('./models/database');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3001));

// Express only servers static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

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
