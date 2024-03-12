// Criar um programa que leia um vetor A com 3 posições de inteiro e imprima na
// tela um vetor B sendo que cada elemento de B seja o quadrado de A

import chalk from "chalk";
import inquirer from "inquirer";

inquirer
	.prompt([
		{
			message: chalk.black.bold.bgWhite("Digite o 1 número:"),
			name: "num1"
		},
		{
			message: chalk.black.bold.bgWhite("Digite o 2 número:"),
			name: "num2"
		},
		{
			message: chalk.black.bold.bgWhite("Digite o 3 número:"),
			name: "num3"
		}
	])
	.then((answer) => {
		var vetor = [];
		const num1 = Number(answer["num1"]);
		vetor.push(num1 * num1);
		const num2 = Number(answer["num2"]);
		vetor.push(num2 * num2);
		const num3 = Number(answer["num3"]);
		vetor.push(num3 * num3);

		console.log(chalk.yellowBright("[ ") + chalk.magenta(vetor.join(" ")) + chalk.yellowBright(" ]") );
	})
	.catch((err) => {
		console.log(err);
	});