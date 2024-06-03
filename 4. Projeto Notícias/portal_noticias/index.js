import express from "express";
import path from "path";

const porta = 2000;
const app = express();

// Pasta dos arquivos estáticos
app.use(express.static("public"));
app.use(express.static("node_modules"));

// Tela inicial
app.get("/", function (req, res) {
  let enderecoHome = path.resolve("./view/index.html");
  res.sendFile(enderecoHome);
});

app.get("/noticiaDs.html", function (req, res) {
  let enderecoDs = path.resolve("./view/noticiaDs.html");
  res.sendFile(enderecoDs);
});

app.get("/noticiaMine.html", function (req, res) {
  let enderecoMine = path.resolve("./view/noticiaMine.html");
  res.sendFile(enderecoMine);
});

app.get("/noticiaEnem.html", function(req, res) {
  let enderecoEnem = path.resolve("./view/noticiaEnem.html");
  res.sendFile(enderecoEnem);
});

app.get("/noticiaCampus.html", function(req, res) {
  let enderecoCampus = path.resolve("./view/noticiaCampus.html");
  res.sendFile(enderecoCampus);
});

app.listen(porta, () => console.log(`Rodando na porta ${porta}`));