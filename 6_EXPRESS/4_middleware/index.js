const express = require('express'); 
const app = express(); 
const path  = require('path')

const port = process.env.PORT || 3000;  

const basePath = path.join(__dirname, 'templates');

const checkAuth = function(req, res, next){
    req.authStatus = false;
    if(req.authStatus){
        console.log('Esta Logado, pode continuar');
        next()
    }else {
        console.log('Nao esta logado');
        next()
    }
} 

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
}); 

app.listen(port, () => {
    console.log('Servidor executando na porta: ', port);
});