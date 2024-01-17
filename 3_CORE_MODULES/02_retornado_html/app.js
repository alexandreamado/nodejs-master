const http = require('http'); 

const port = process.env.PORT || 3000; 

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');
    res.end('<h1>Ola este é o meu primeiro server html</h1>')
}) 

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`))