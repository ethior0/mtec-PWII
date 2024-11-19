import express from "express";
import ExpressHandlebars from "express-handlebars";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Importando path

import { inserirUsuario } from './DAO/insertUsuario.js';

const porta = 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Pastas estáticas
app.use(express.static("public/"));
app.use(express.static("controller/"));
app.use(express.static("node_modules/"));

app.use(express.json());

app.engine("handlebars", ExpressHandlebars.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

// Rota para inserir usuário
app.post('/cadastro', async (req, res) => {
  const { email, senha, repeteSenha, nome, telefone, dataNascimento} = req.body;
  try {
    const resultado = await inserirUsuario(email, senha, nome, telefone, dataNascimento);
    res.json({ message: 'Usuário inserido com sucesso!', resultado });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao inserir usuário.', error: err.message });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

// app.post('/login', async (req, res) => {
//   const { email, senha } = req.body;
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro-usuario.html'));
});


app.listen(porta, () => {
  console.log(`Rodando na porta ${porta}`)
});