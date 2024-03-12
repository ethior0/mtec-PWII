// Faça um script que pede duas notas de um aluno. 
// Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
// - A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// - A mensagem "Reprovado", se a média for menor do que sete;
// - A mensagem "Aprovado com Distinção", se a média for igual a dez.

import chalk from "chalk";
import inquirer from "inquirer";

inquirer
	.prompt([
		{
			message: chalk.black.bold.bgWhite("Digite a primeira nota do aluno:"),
			name: "nota1"
		},
		{
			message: chalk.black.bold.bgWhite("Digite a segunda nota do aluno:"),
			name: "nota2"
		}
	])
	.then((answer) => {
		const nota1 = Number(answer["nota1"]);
		const nota2 = Number(answer["nota2"]);
		const media = (nota1 + nota2) / 2;

		if (media === 10) {
			console.log(chalk.magenta("Aprovado com Distinção!"));
		} else if (media >= 7) {
			console.log(chalk.green("Aprovado!"));
		} else {
			console.log(chalk.red("Reprovado"));
		}
	})
	.catch((err) => {
		console.log(err);
	});