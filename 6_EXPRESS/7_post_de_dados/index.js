const exp = require('constants');
const express = require('express'); 
const app = express(); 
const path  = require('path')

const port = process.env.PORT || 3000;  

const basePath = path.join(__dirname, 'templates');

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age; 

    console.log(`o nome do usuario é ${name} e ele tem ${age} anos.`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id; 
    
    //leitura da tabela users, registrar um usuario do banco
    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`);
}); 

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
}); 










app.listen(port, () => {
    console.log('Servidor executando na porta: ', port);
}); 