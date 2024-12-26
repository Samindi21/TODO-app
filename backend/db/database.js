// const mysql = require("mysql");
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootpassword",
    database: "tododatabase",
    port: 3306               // The port on which MySQL is running (default is 3306)

});

// open the MySQL connection
db.connect(error => {
    if (error) throw error;
    console.log("DB connected");
});

module.exports = db;