const express = require('express'); 
const app = express(); 

const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
    res.send('<h1 style="color: green">Ola mundo Vamos fazer isso</h1>')
}) 

app.listen(port, () => {
    console.log('Servidor executando na porta: ', port);
})