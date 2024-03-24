// Faça um programa que receba 3 valores e retorne a diferença entre eles

import http from "http";
import { diferenca } from "./diferenca.js";

http.createServer((req, res) => {
	const n1 = 20;
	const n2 = 3;
	const n3 = 10;

	const res2 = diferenca(n1, n2, n3);
	res.write(`A diferenca e: ${res2}`);

	res.end();
}).listen(5000, () => {
	console.log("App rodando na porta 5000");
});