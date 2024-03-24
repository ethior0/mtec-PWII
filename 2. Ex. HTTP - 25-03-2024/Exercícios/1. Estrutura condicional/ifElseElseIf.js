// Faça um script que pede duas notas de um aluno. 
// Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
// - A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// - A mensagem "Reprovado", se a média for menor do que sete;
// - A mensagem "Aprovado com Distinção", se a média for igual a dez.

import http from "http";

http.createServer((req, res) => {
	const nota1 = 9;
	const nota2 = 6.5;
	const media = (nota1 + nota2) / 2;

	if (media === 10) {
		res.write(`Aprovado com Distincao!`);
	} else if (media >= 7) {
		res.write(`Aprovado!`);
	} else {
		res.write(`Reprovado`);
	}

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});