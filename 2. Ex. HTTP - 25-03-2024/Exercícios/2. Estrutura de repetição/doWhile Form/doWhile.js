// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. 
// Ex.: 5! = 5.4.3.2.1 = 120

import http from "http";
import url from "url";

http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);
  const fib = urlInfo.query.valor;
  let resposta = 1, cc = fib, sen = []; // Resultado, Contador, Sentença

  do {
    sen.push(cc);
    resposta *= cc;
    cc--;
  } while (cc);
  res.write(`${fib}! +  = ${sen.join(".")} = ${resposta}`);

	res.end();
}).listen(5500, () => {
	console.log("App rodando na porta 5500");
});
