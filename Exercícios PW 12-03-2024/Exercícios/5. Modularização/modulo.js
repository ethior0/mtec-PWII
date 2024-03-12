// Faça um programa que receba 3 valores e retorne a diferença entre eles
import chalk from "chalk";
import inquirer from "inquirer";
import { diferenca } from "./diferenca.js";

inquirer
	.prompt([
		{
			message: chalk.black.bold.bgWhite("Digite um número inteiro"),
			name: "n1"
		},
		{
			message: chalk.black.bold.bgWhite("Digite um número inteiro"),
			name: "n2"
		},
		{
			message: chalk.black.bold.bgWhite("Digite outro número inteiro"),
			name: "n3"
		}
	])
	.then((answer) => {
		const n1 = Number(answer["n1"]);
		const n2 = Number(answer["n2"]);
		const n3 = Number(answer["n3"]);

		const res2 = diferenca(n1, n2, n3);
		console.log(chalk.magenta(`A diferença é: ${res2}`));
	})
	.catch((err) => {
		console.log(err);
	});