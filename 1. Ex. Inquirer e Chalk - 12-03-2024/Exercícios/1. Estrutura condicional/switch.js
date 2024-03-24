// Faça um script que pergunte em que turno você estuda. 
// Peça para digitar M - Manhã ou T - Tarde ou N - Noturno. 
// Imprima a mensagem 
// "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou 
// "Valor Inválido!", conforme o caso.

import chalk from "chalk";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      message: chalk.black.bold.bgWhite("Em que turno você estuda? Digite: M = Manhã, T = Tarde, N = Noite"),
      name: "valor"
    }
  ])
  .then((answer) => {
    const periodo = answer["valor"];

    switch (periodo) {
      case "M":
        console.log(chalk.yellowBright("Bom dia!"));
        break;
      case "T":
        console.log(chalk.redBright("Boa Tarde!"));
        break;
      case "N":
        console.log(chalk.blueBright("Boa noite!"));
        break;
      default:
        console.log("Valor Inválido!");
    }
  })
  .catch((err) => {
    console.log(err);
  }); 