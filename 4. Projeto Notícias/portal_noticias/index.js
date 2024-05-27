import express from "express";
import path from "path";

const porta = 2000;
const app = express();
app.use(express.static("public"));

// Tela inicial
app.get("/", function(req, res) {
    let enderecoHome = path.resolve("./view/index.html");
    res.sendFile(enderecoHome);
});

app.listen(porta, () => console.log(`Rodando na porta ${porta}`));