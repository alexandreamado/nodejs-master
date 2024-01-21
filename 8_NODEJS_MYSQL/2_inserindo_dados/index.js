const e = require("express");
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.use(
  express.urlencoded({
    extended: true,

  })
) 

app.use(express.json())

const port = process.env.PORT || 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pages = req.body.pages 

    const sql = `insert into books (title, pages) values ('${title}', '${pages}')`;
    connection.query(sql, (err) => {
      if(err){
        console.log(err)
      }
      res.redirect('/')
    })
})


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
