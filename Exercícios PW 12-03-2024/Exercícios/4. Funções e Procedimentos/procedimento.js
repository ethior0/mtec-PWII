// Escreva um procedimento que receba um número inteiro e imprima o mês
// correspondente ao número. Por exemplo, 2 corresponde à “fevereiro”. O procedimento
// deve mostrar uma mensagem de erro caso o número recebido não faça sentido. 

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