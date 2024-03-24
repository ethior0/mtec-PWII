// Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não.

import http from "http";

http.createServer((req, res) => {
  const num = -20;
  if (num >= 0) {
    res.write(`${num} e um numero POSITIVO.`);
  } else {
    res.write(`${num} e um numero NEGATIVO.`);
  }

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});