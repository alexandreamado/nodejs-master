const http = require('http'); 

const port = process.env.PORT || 3000; 

const server = http.createServer((req, res) => {
    res.write('OI HTTP: Alexandre')
    res.end()
}) 

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`))