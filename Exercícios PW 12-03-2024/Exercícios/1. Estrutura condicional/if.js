// Peça para o usuário digitar um número e confirmá-lo, caso o número
// seja diferente, escreva  "Não é o mesmo número",
// caso não, nada acontecerá.

import chalk from "chalk";
import inquirer from "inquirer";

inquirer
	.prompt([
		{
			message: chalk.black.bold.bgWhite("Digite um número:"),
			name: "num1"
		},
		{
			message: chalk.black.bold.bgWhite("Confirme o número:"),
			name: "num2"
		}
	])
	.then((answer) => {
		const num1 = Number(answer["num1"]);
		const num2 = Number(answer["num2"]);

		if (num1 !== num2) {
			console.log("Não é o mesmo número!")
		}
	})
	.catch((err) => {
		console.log(err);
	});