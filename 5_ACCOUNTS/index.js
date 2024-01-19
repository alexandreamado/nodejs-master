//modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

const fs = require("fs");

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que voce deseja fazer?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Criar Conta") {
        createAccount();
      }else if(action === "Depositar"){

      }else if(action === "Consultar Saldo"){

      }else if(action === "Sacar"){

      }else if(action === "Sair"){
        console.log(chalk.bgBlue.black('Obrigado por usar o programa'))
        process.exit()
      }
    })
    .catch((err) => console.log(err));
}

function createAccount() {
  console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
  console.log(chalk.green("Defina as opcoes de sua conta a seguir"));

  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome para sua conta:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      console.info(accountName);

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed("Esta conta já existe, escolha outro nome!"));

        buildAccount();
        return;
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.log(err);
        }
      );

      console.log(chalk.green('A sua conta foi criada!'))
    })
    .catch((err) => console.log(err));
}

//user account 
function depositar(){
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome de sua conta?'
    }
  ]).then((answer) => {
    const accountName = answer['accountName'];

    if(!checkaccount(accountName)){
      return depositar()
    }

  }).catch((err) => console.log(err))
}

function checkaccount(accountName){
  if(!fs.existsSync(`accounts/${accountName}.json`)){
    console.log(chalk.bgRed.black('Conta nao existe!'));
    return false
  }
  return true;
}