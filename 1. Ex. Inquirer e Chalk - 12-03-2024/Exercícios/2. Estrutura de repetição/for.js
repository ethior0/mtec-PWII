// Faça um programa que imprima na tela apenas 
// os números ímpares de 1 até um número escolhido pelo usuário.

import chalk from "chalk";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      message: chalk.black.bold.bgWhite("Digite o número:"),
      name: "valor"
    }
  ])
  .then((answer) => {
    const num1 = Number(answer.valor);
    let output = ""; // Sentença do output
    
    for (let i = 1; i <= num1; i++) {
      if (i % 2 !== 0) {
        output += `${chalk.magenta(i)} `;
      }
    }
    console.log(output);
  })
  .catch((err) => {
    console.log(err);
  });