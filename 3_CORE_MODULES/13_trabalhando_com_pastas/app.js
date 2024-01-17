const fs = require('fs'); 

fs.mkdirSync("minhapasta");

if(!fs.existsSync('./minhapasta')){
    console.log('nao existe')
} 
