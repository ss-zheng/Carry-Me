var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3001));

// var url = "mongodb://ss-zheng:1997Zheng@cluster0-shard-00-00-zgcrt.mongodb.net:27017,cluster0-shard-00-01-zgcrt.mongodb.net:27017,cluster0-shard-00-02-zgcrt.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
var url = "mongodb://localhost:27017/mydb"

// Express only servers static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Method', 'Get, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-with, content-type');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// create user {{{
function createUser(req,res){
    var date = new Date();
    var user = {
        user_name: req.body.user_name, 
        user_pass: req.body.user_pass,
        user_email: req.body.user_email,
        user_date: date,
        user_level: 0,
        user_follows: [],
        user_posts: []
    }
    MongoClient.connect(url,function(err, db) {
        if (err) {
            res.send(500, err);
        } else {
            console.log("created");
            db.collection('users').insertOne(user, function(err, res) {
                // how to handle error here
                if (err) throw err;
                console.log(user.user_name, " created at ", user.user_date);
                db.close();
            });
        }
    });
    res.json(user);
}
//}}}

// logIn {{{
function logIn(req,res){
    var user_email = req.body.user_email;
    var user_pass = req.body.user_pass;
    MongoClient.connect(url,function(err, db) {
        if (err) throw err;
        db.collection('users').find({user_email: user_email, user_pass: user_pass}).toArray(function(err, result) {
            if (err) {
                res.send(500);
            // not found
            } else if (result.length == 0) {
                res.send(404);
            } else {
                console.log("found");
                res.json(result);
            }
            db.close();
        });
    });
}
//}}}

// getUser {{{ remember to hide password
function getUser(req,res){
    var user_email = req.params.user_email;
    MongoClient.connect(url,function(err, db) {
        if (err) res.send(500);
        db.collection('users').find({user_email: user_email}).toArray(function(err, result) {
            if (err) {
                res.send(500);
            // not found
            } else if (result.length == 0) {
                res.send(404);
            } else {
                console.log("found");
                res.json(result);
            }
            db.close();
        });
    });
}
//}}}

//for users
app.post('/users', createUser);
app.post('/users/login', logIn);
// app.get('/carry_me/users', readAllUser);
app.get('/users/:user_email', getUser);
// app.put('/carry_me/users/:user_id', updateUser);
// app.delete('/carry_me/users/:user_id', deleteUser);

//for posts
// app.post('/api/carry_me/posts', createPost);
// app.get('/api/carry_me/posts', readAllPost);
// app.get('/api/carry_me/posts/:user_email', readPost);
// app.put('/api/carry_me/posts/:user_id', updatePost);
// app.delete('/api/carry_me/posts/:user_id', deletePost);

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); 
});

