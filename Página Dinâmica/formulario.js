const http = require("http");
const fs = require("fs");
const port = 4000;

const server = http.createServer((req, res) => {

    let htmlText = fs.readFileSync("index.html", (err, data) => {
        return data;
    });

    res.write(htmlText);
    res.end();
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});