// Faça um programa que imprima na tela apenas 
// os números ímpares de 1 até um número escolhido pelo usuário.

import http from "http";

http.createServer((req, res) => {
  const num1 = 20;
  let output = ""; // Sentença do output
  
  for (let i = 1; i <= num1; i++) {
    if (i % 2 !== 0) {
      output += `${i} `;
    }
  }
  res.write(output);

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});