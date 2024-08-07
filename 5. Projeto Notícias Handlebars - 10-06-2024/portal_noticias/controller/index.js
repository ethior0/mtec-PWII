import express from "express";
import ExpressHandlebars from "express-handlebars";
import { noticias } from "../public/js/noticias.js";

const porta = 2000;
const app = express();

// Pasta dos arquivos estáticos
app.use(express.static("public"));
app.use(express.static("node_modules"));
app.use(express.static("controller"));
app.use(express.static("model"));

app.engine("handlebars", ExpressHandlebars.engine());
app.set("view engine", "handlebars");

// Tela inicial
app.get("/", function (req, res) {
  res.render("index", {noticias})
});

// Notícias
app.get("/noticiaDs.html", function (req, res) {
  res.render("noticiaDs");
});

app.get("/noticiaMine.html", function (req, res) {
  res.render("noticiaMine");
});

app.get("/noticiaEnem.html", function(req, res) {
  res.render("noticiaEnem");
});

app.get("/noticiaCampus.html", function(req, res) {
  res.render("noticiaCampus");
});

app.get("/noticiaAdm.html", function(req, res) {
  res.render("noticiaAdm");
});

app.listen(porta, () => console.log(`Rodando na porta ${porta}`));