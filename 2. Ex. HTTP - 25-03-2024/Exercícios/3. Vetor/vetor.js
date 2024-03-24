// Criar um programa que leia um vetor A com 3 posições de inteiro e imprima na
// tela um vetor B sendo que cada elemento de B seja o quadrado de A

import http from "http";

http.createServer((req, res) => {
	var vetor = [];
	const num1 = 4;
	vetor.push(num1 * num1);
	const num2 = 5;
	vetor.push(num2 * num2);
	const num3 = 6;
	vetor.push(num3 * num3);

	res.write("[ " + (vetor.join(" ")) + " ]");

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});