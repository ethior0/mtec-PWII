import express from "express";
import ExpressHandlebars from "express-handlebars";

const porta = 3000;
const app = express();

// Pastas estáticas
app.use(express.static("public/"));
app.use(express.static("controller/"));
app.use(express.static("node_modules/"));

app.engine("handlebars", ExpressHandlebars.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(porta, () => {
  console.log(`Rodando na porta ${porta}`)
});