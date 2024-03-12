// Escreva uma função que calcule a área do quadrado

import chalk from "chalk";
import inquirer from "inquirer";

function calcularArea(base, altura) {
  return base * altura;
}

inquirer
  .prompt([
    {
      message: chalk.black.bold.bgWhite("Digite a base do quadrado:"),
      name: "base"
    },
    {
      message: chalk.black.bold.bgWhite("Digite a altura do quadrado:"),
      name: "altura"
    }
  ])
  .then((answer) => {
    const base = Number(answer["base"]);
    const altura = Number(answer["altura"]);

    const area = calcularArea(base, altura);
    console.log(chalk.magenta("A área do quadrado é: " + area));
  })
  .catch((err) => {
    console.log(err);
  });

