// Escreva um procedimento que receba dois números inteiros e some-os 

import http from "http";

function soma(num1, num2, resposta) {
	resposta.write("A soma e: " + (num1 + num2));
}

http.createServer((req, res) => {
	const num1 = Number(answer["num1"]);
	const num2 = Number(answer["num2"]);
	soma(num1, num2, res);

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});