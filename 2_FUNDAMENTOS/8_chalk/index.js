const chalk = require('chalk');

const nota = 9; 

if(nota > 8){
    console.log(chalk.green('Parabens! voce foi aprovado:'))
}else{
    console.log(chalk.red('Reprovado'))
}