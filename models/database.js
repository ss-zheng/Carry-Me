const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/carry_me';

function returnQuery(query) {
    query.on('row', (row) => {
        results.push(row);
    });

    //After all data is returned. close connection and return results
    query.on('end', () => {
        done();
        return res.json(results);
    });
}
    

module.exports = {
    createUser: (req,res) => {
        const results = [];
        const date = new Date();
        //grab data from http request
        const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name, 
            user_pass: req.body.user_pass,
            user_email: req.body.user_email,
            user_date: date,
            user_level: 1
        }
        
        console.log(data);
        console.log(req.header);
        console.log(req.body);

        //get a postgres client from the connection pool
        pg.connect(connectionString, (err,client,done) => {

            //handle connection errs
            if (err) {
                done();
                console.log('myerr');
                console.log(err);
                return res.status(500).json({success:false, data:err});
            }

            //sql query > insert data
            client.query('INSERT INTO users(first_name, last_name, user_pass, user_email, user_date, user_level) values($1, $2, $3, $4, $5, $6)', [data.first_name, data.last_name, data.user_pass, data.user_email, data.user_date, data.user_level]);

            //sql query > select data 
            const query = client.query('SELECT * FROM users WHERE user_email=($1)', [data.user_email]);
            console.log("create user", data.first_name, "at", date);

            //stream results back one row at a time
            query.on('row',(row,result) => {
                results.push(row);
            });

            //after all data is returned, close connection and return results
            query.on('end', () => {
                done();
                return res.json(results);
            });
        });
    },

    updateUser: (req,res) => {
        // const results = [];
        //Grab data from the url parameters
        const user_id = req.params.user_id;
        //grab data from http request
        const data = {
            user_name: "zheng", 
            user_pass: "1234567",
            user_email: "lajiyoujian2020@gmail.com",
            // user_name: req.body.user_name, 
            // user_pass: req.body.usr_pass,
            // user_email: req.body.usr_pass,
            user_date: '2017-11-05',
            user_level: 2
        }

        //get a postgres client from the connection pool
        pg.connect(connectionString, (err,client,done) => {

            //handle connection errs
            if (err) {
                done();
                console.log('myerr');
                console.log(err);
                return res.status(500).json({success:false, data:err});
            }

            //sql query update data
            client.query('UPDATE users SET user_name=($1), user_pass=($2), user_email=($3), user_date=($4), user_level=($5) WHERE user_id=($6)', [data.user_name, data.user_pass, data.user_email, data.user_date, data.user_level, user_id]);
            console.log("update success");
            return res.end();
        });
    },

    readAllUser: (req, res) => {
        const results = [];
        // Get a postgres client from the connection pool
        pg.connect(connectionString, (err, client, done) => {
            //Handle connectino errors
            if (err) {
                done();
                console.log(err);
                return res.statue(500).json({success: false, date: err});
            }

            //sql query select data
            const query = client.query('SELECT * FROM users  ORDER BY user_id ASC;');

            //Stream results back one row at a time
            query.on('row', (row) => {
                results.push(row);
            });

            //After all data is returned. close connection and return results
            query.on('end', () => {
                done();
                return res.json(results);
            });
        });
    },

    readUser: (req, res) => {
        const results = [];
        //Grab data from the url parameters
        const user_email = req.params.user_email;
        // Get a postgres client from the connection pool
        pg.connect(connectionString, (err, client, done) => {
            //Handle connectino errors
            if (err) {
                done();
                console.log(err);
                return res.statue(500).json({success: false, date: err});
            }

            //sql query select data
            const query = client.query('SELECT * FROM users  where user_email=$1', [user_email]);

            //Stream results back one row at a time
            query.on('row', (row) => {
                results.push(row);
            });

            //After all data is returned. close connection and return results
            query.on('end', () => {
                done();
                return res.json(results);
            });
        });
    },

    deleteUser: (req, res) => {
        // const results = [];
        //Grab data from the url parameters
        const user_id = req.params.user_id;
        // Get a postgres client from the connection pool
        pg.connect(connectionString, (err, client, done) => {
            //Handle connectino errors
            if (err) {
                done();
                console.log(err);
                return res.statue(500).json({success: false, date: err});
            }

            //sql query delete data
            client.query('DELETE FROM users  where user_id=$1', [user_id]);
            console.log("delete success");
            return res.end();
        });
    }
};
