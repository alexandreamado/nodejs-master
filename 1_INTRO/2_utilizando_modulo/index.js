const fs = require('fs'); //file system

fs.readFile('arquivo1.txt', 'utf-8', (err, data) => {
    if(err){
        return console.log(`Erro ao ler o arquivo: ${err}`);    
    } 
    console.log(data)
});