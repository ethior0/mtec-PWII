const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true);
    const valor = urlInfo.query.valor;

    let inicio = fs.readFileSync("inicio.html", (err, data) => {
        return data;
    });

    let fim = fs.readFileSync("fim.html", (err, data) => {
        return data;
    });

    res.write(inicio);
    if (valor >= 0) {
        res.write(`<h1>${valor} e um numero POSITIVO.</h1>`);
    } else {
        res.write(`<h1>${valor} e um numero NEGATIVO.</h1>`);
    }
    res.write(fim);

    res.end();
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
