const mysql = require("mysql");
const express = require("express");

const app = express();

app.listen(3002, () => console.log("Listening to port: 3002"))

const mysqlConnection = mysql.createConnection({
  host: 'localhost', // or i can use 127.0.0.1
  user: 'natty',
  password: 'natanan33',   // default XAMPP password
  database: 'natty' // you can use any database
});

// mysqlConnection.connect()
mysqlConnection.connect((err) => {
    if (err) console.log(err)
    else console.log("Conected with mysql database")
})