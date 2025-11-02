const mysql = require("mysql");
const express = require("express");

const app = express();

app.listen(3002, () => console.log("Listening to port: 3002"));

const mysqlConnection = mysql.createConnection({
  host: "localhost", // or i can use 127.0.0.1
  user: "natty",
  password: "natanan33", // default XAMPP password
  database: "natty", // you can use any database
});

// mysqlConnection.connect()
mysqlConnection.connect((err) => {
  if (err) console.log(err);
  else console.log("Conected with mysql database");
});

app.get("/install", (req, res) => {
  let createProducts = `CREATE TABLE IF NOT EXISTS Products(
    product_id int auto_increment,
    product_url varchar(255) not null,
    product_name varchar(255) not null,
    PRIMARY KEY (product_id)
  )`;

  let createProductDescription = `CREATE TABLE
    if not exists ProductDescription(
    description_id int auto_increment,
    product_id int(11) not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES
    Products(product_id)
    )`;

  let createProductPrice = `CREATE TABLE if
    not exists ProductPrice(
    price_id int auto_increment,
    product_id int(11) not null,
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES
    Products(product_id)
    )`;

    
  mysqlConnection.query(createProducts, (err, result) => {
    if (err) throw err;
    console.log("Table 'users' created");
  });
  mysqlConnection.query(createProductDescription, (err, result) => {
    if (err) throw err;
  });
  mysqlConnection.query(createProductPrice, (err, result) => {
    if (err) throw err;
  });

  res.end("Table created");
});
