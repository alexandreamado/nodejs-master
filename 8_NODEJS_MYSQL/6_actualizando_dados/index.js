const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/books/insertbook', function (req, res) {
  const title = req.body.title
  const pageqty = req.body.pageqty

  const query = `INSERT INTO books (title, pages) VALUES ('${title}', ${pageqty})`

  conn.query(query, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect('/')
  })
}) 

app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books"

  conn.query(sql, (err, data) => {
    if(err){
      console.log(err)
      return
    }
    const books = data;
    console.log(books); 

    res.render('books', {books})
  })
})

app.get("/books/:id", (req, res) => {
  const id = req.params.id; 
  const sql = `SELECT * FROM books WHERE id =${id}`

  conn.query(sql, function(err, data) {
    if(err){
      console.log(err)
      return
    } 
    const book = data[0]
    res.render('book', {book})
  })
})


app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id; 
  const sql = `SELECT * FROM books WHERE id = ${id}` 

  conn.query(sql, function(err, data) {
    if(err){
      console.log(err)
      return
    } 
    const book = data[0]
    res.render('editbook', {book})
  })
}) 

app.post('/books/updateBook' , (req,res)=>{
  const id = req.body.id
  const title = req.body.title
  const pages = req.body.pageqty 

  const sql = `update books set title = '${title}', pages = '${pages}' where id = ${id}`

  conn.query(sql, function(err, data){
    if(err){
      console.log(err)
      return
    }

    res.redirect('/books')
  })
})

app.post('/books/remove/:id', (req, res) => {
  const id = req.params.id

  const sql =  `DELETE FROM books WHERE id = ${id}`

  conn.query(sql, function(err){
    if(err){
      console.log(err)
      return
    } 
    res.redirect('/books')

  } )

})


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password',
  database: 'nodemysql',
})

conn.connect(function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Conectado ao MySQL!')

  app.listen(3000)
})
