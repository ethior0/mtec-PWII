// Faça um script que pergunte em que turno você estuda. 
// Peça para digitar M - Manhã ou T - Tarde ou N - Noturno. 
// Imprima a mensagem 
// "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou 
// "Valor Inválido!", conforme o caso.

import http from "http";

http.createServer((req, res) => {
  const periodo = "M";

  switch (periodo) {
    case "M":
      res.write("Bom dia!");
      break;
    case "T":
      res.write("Boa Tarde!");
      break;
    case "N":
      res.write("Boa noite!");
      break;
    default:
      res.write("Valor Invalido!");
  }

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});