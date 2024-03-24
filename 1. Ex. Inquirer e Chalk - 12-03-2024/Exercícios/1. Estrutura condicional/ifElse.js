// Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não.

import chalk from "chalk";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      message: chalk.black.bold.bgWhite("Digite um número inteiro:"),
      name: "valor"
    }
  ])
  .then((answer) => {
    const num = Number(answer["valor"]);
    if (num >= 0) {
      console.log(`${chalk.green.bold(num)} é um número POSITIVO.`);
    } else {
      console.log(`${chalk.red.bold(num)} é um número NEGATIVO.`);
    }
  })
  .catch((err) => {
    console.log(err);
  });