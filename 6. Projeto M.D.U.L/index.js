import express from "express";
import session from "express-session";
import ExpressHandlebars from "express-handlebars";

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

import routes from "./controller/routes.js";

const porta = 3000;
const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// Pastas estáticas
app.use(express.static("model/"));
app.use(express.static("public/"));
app.use(express.static("controller/"));
app.use(express.static("node_modules/"));

app.use(express.json());

app.engine("handlebars", ExpressHandlebars.engine());
app.set("view engine", "handlebars");

app.use(session({
  secret: "dnajsdaosdk014i90asm01mp01 dpas 1p4-4",
  resave: false,
  saveUninitialized: false
}));

app.use(routes);

app.listen(porta, () => {
  console.log(`Acessar em http://localhost:${porta}`);
  console.log(`Rodando na porta ${porta}`)
});