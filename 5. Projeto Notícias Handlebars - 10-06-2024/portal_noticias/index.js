import express from "express";
// import path from "path";
import ExpressHandlebars from "express-handlebars";

const porta = 2000;
const app = express();

// Pasta dos arquivos estáticos
app.use(express.static("public"));
app.use(express.static("node_modules"));

app.engine("handlebars", ExpressHandlebars.engine());
app.set("view engine", "handlebars");

// Tela inicial
app.get("/", function (req, res) {
  // let enderecoHome = path.resolve("./view/index.html");
  // res.sendFile(enderecoHome);
  res.render("index");
});

// Notícias
app.get("/noticiaDs.html", function (req, res) {
  // let enderecoDs = path.resolve("./view/noticiaDs.html");
  // res.sendFile(enderecoDs);
  res.render("noticiaDs");
});

app.get("/noticiaMine.html", function (req, res) {
  // let enderecoMine = path.resolve("./view/noticiaMine.html");
  // res.sendFile(enderecoMine);
  res.render("noticiaMine");
});

app.get("/noticiaEnem.html", function(req, res) {
  // let enderecoEnem = path.resolve("./view/noticiaEnem.html");
  // res.sendFile(enderecoEnem);
  res.render("noticiaEnem");
});

app.get("/noticiaCampus.html", function(req, res) {
  // let enderecoCampus = path.resolve("./view/noticiaCampus.html");
  // res.sendFile(enderecoCampus);
  res.render("noticiaCampus");
});

app.get("/noticiaAdm.html", function(req, res) {
  // let enderecoAdm = path.resolve("./view/noticiaAdm.html");
  // res.sendFile(enderecoAdm);
  res.render("noticiaAdm");
});

app.listen(porta, () => console.log(`Rodando na porta ${porta}`));