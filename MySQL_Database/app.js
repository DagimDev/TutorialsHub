const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.listen(3002, () => console.log("Listening to port: 3002"));

app.use(bodyparser.urlencoded({ extended: true }));

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

// Insert data
app.post("/addiphones", (req, res) => {
  console.log(req.body);
  let Id = req.body.iphoneId;
  let img = req.body.imgPath;
  let Url = req.body.iphoneLink;
  let Title = req.body.iphoneTitle;
  let Brief = req.body.briefDescription;
  let StartPrice = req.body.StartPrice;
  let PriceRange = req.body.priceRange;
  let Description = req.body.fullDescription;

  let sqlAddToProducts =
    "INSERT INTO Products (product_url, product_name) VALUES ('" +
    Id +
    "', '" +
    Title +
    "' )";

  mysqlConnection.query(sqlAddToProducts, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.end("seraaaaa");
});


// const tableName = 'users'; // replace with your table name
// const sql = `SELECT * FROM \`${tableName}\`;`;


const sql = `SELECT * FROM Products`;
// Execute the query
mysqlConnection.query(sql, (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
  // Optional: log column names
  console.log('Fields:', fields.map(f => f.name));
});

