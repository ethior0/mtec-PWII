// Peça para o usuário digitar um número e confirmá-lo, caso o número
// seja diferente, escreva  "Não é o mesmo número",
// caso não, nada acontecerá.

import http from "http";

http.createServer((req, res) => {
	const num1 = 10;
	const num2 = 11;

	if (num1 !== num2) {
		res.write(`Nao e o mesmo numero!`);
	}

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});