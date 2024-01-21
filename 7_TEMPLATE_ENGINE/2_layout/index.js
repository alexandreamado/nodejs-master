const express = require('express');
const exphbs = require('express-handlebars'); 

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars'); 

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {
    const items = ["Item a", "Item b", "item c"]

    res.render('dashboard', {items:items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'vais aprender a usar o nodejs...',
        comments: 7
    } 

    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const posts = [
        {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'vais aprender a usar o nodejs...',
        comments: 9
    },
    {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'vais aprender a usar o nodejs...',
        comments: 7
    }
]

res.render('blog', {posts: posts})
})

app.get('/', (req, res) => {
    const user = {
        name: "Alexandre",
        lastName: "Amado",
        age: 25
    } 

    const auth = true;
    const approved = false;

    res.render('home', {user: user, auth, approved});
});

app.listen(3000, () => {
    console.log('executando o servidor')
})