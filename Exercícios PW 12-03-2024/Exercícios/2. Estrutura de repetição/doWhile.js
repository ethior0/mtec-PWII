// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. 
// Ex.: 5! = 5.4.3.2.1 = 120

import chalk from "chalk";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      message: "Digite um número para o cálculo do fatorial:",
      name: "valor"
    }
  ])
  .then((answer) => {
    const fib = Number(answer["valor"]);
    let res = 1, cc = fib, sen = []; // Resultado, Contador, Sentença

    do {
      sen.push(cc);
      res *= cc;
      cc--;
    } while (cc);

    console.log(chalk.magenta(`${fib}!`) + ` = ${chalk.red(sen.join("."))} = ${chalk.green.bold(res)}`);
  })
  .catch();