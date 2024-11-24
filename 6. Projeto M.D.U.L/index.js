import express from "express";
import session from "express-session";
import ExpressHandlebars from "express-handlebars";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Importando path

import { inserirUsuario } from './DAO/insertUsuario.js';
import { verificarUsuario } from './DAO/verificarUsuario.js';

const porta = 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(session({
  secret: "dnajsdaosdk014i90asm01mp01 dpas 1p4-4",
  resave: false,
  saveUninitialized: false
}));

// Pastas estáticas
app.use(express.static("public/"));
app.use(express.static("controller/"));
app.use(express.static("node_modules/"));

app.use(express.json());

app.engine("handlebars", ExpressHandlebars.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  if (req.session.login) {
    const user = req.session.login;
    res.render("index", user);
  } else {
    res.render("index");
  }
});

app.get("/cadastro", (req, res) => {
  if (req.session.login) {
    const msg = {
      mensagem: "Você já está logado em uma conta!"
    }
    res.render("error", { msg });
  } else {
    res.render("cadastro");
  }
});

app.post('/cadastro', async (req, res) => {
  const { email, senha, repeteSenha, nome, telefone, dataNascimento} = req.body;
  try {
    const resultado = await inserirUsuario(email, senha, nome, telefone, dataNascimento);
    
    if (resultado) {
      req.session.login = await verificarUsuario(email, senha);
      res.json({ 
        title: "Cadastro ",
        message: 'Usuário cadastrado com sucesso! ✅' 
      });
    } else {
      res.json({
        title: "Cadastro",
        message: 'Erro. Este e-mail já está em uso. ❌'
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao inserir usuário.', error: err.message });
  }
});

app.get("/login", (req, res) => {
  if (req.session.login) {
    const msg = {
      mensagem: "Você já está logado em uma conta!"
    }
    res.render("error", { msg });
  } else {
    res.render("login");
  }
});

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await verificarUsuario(email, senha);

    if (user.length > 0) {
      req.session.login = user;
      res.json({ 
        title: "Login",
        message: 'Usuário logado com sucesso! ✅' 
      });
    } else {
      res.json({
        title: "Login",
        message: 'Usuário não encontrado! ❌' 
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao logar usuário.', error: err.message });
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(porta, () => {
  console.log(`Rodando na porta ${porta}`)
});