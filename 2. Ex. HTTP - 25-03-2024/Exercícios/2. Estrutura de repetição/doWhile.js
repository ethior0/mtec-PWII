// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. 
// Ex.: 5! = 5.4.3.2.1 = 120

import http from "http";

http.createServer((req, res) => {
  const fib = 5;
  let res = 1, cc = fib, sen = []; // Resultado, Contador, Sentença

  do {
    sen.push(cc);
    res *= cc;
    cc--;
  } while (cc);
  res.write(`${fib}! +  = ${sen.join(".")} = ${res}`);

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});