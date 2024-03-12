// Fazer um programa para imprimir a 
// tabuada de 1 a 10 de um número lido pelo usuário. 

import chalk from "chalk";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      message: chalk.black.bold.bgWhite("Digite um número inteiro para ver sua tabuada de 1 a 10:"),
      name: "valor"
    }
  ])
  .then((answer) => {
    const num = Number(answer["valor"]);
    var cont = 1;

    while (cont <= 10) {
      console.log(`${chalk.magenta(cont)} x ${chalk.red(num)} = ${chalk.green.bold(cont*num)}`);
      cont++;
    }
  })
  .catch((err) => {
    console.log(err);
  });