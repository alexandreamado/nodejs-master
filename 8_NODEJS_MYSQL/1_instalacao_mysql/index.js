const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const port = process.env.PORT || 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

//conexao com mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password",
  database: "nodemysql",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("banco de dados conectado");
});

app.listen(port, () => {
  console.log("Executando o servidor");
});
