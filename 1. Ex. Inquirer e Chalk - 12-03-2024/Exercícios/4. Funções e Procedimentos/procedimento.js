// Escreva um procedimento que receba dois números inteiros e some-os 

import chalk from "chalk";
import inquirer from "inquirer";

function soma(num1, num2) {
	console.log(chalk.magenta("A soma é: " + (num1 + num2)));
}

inquirer
	.prompt([
		{
			message: chalk.black.bold.bgWhite("Digite um número:"),
			name: "num1"
		},
		{
			message: chalk.black.bold.bgWhite("Digite outro:"),
			name: "num2"
		}
	])
	.then((answer) => {
		const num1 = Number(answer["num1"]);
		const num2 = Number(answer["num2"]);

		soma(num1, num2);
	})
	.catch((err) => {
		console.log(err);
	});