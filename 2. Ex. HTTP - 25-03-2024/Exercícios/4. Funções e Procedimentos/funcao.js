// Escreva uma função que calcule a área do quadrado

import http from "http";

function calcularArea(base, altura) {
  return base * altura;
}

http.createServer((req, res) => {
  const base = 4;
  const altura = 4;

  const area = calcularArea(base, altura);
  res.write("A area do quadrado e: " + area);

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});

