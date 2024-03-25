// Fazer um programa para imprimir a 
// tabuada de 1 a 10 de um número lido pelo usuário. 

import http from "http";

http.createServer((req, res) => {
  const num = 8;
  var cont = 1;

  while (cont <= 10) {
    res.write(`<p>${cont} x ${num} = ${cont*num}</p>`);
    cont++;
  }

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});
