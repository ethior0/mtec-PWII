import express from "express";

import { indexGet } from "./indexController.js";
import { loginGet, loginPost } from "./loginController.js";
import { cadastroGet, cadastroPost } from "./cadastroController.js";
import { perfilGet } from "./perfilController.js";
import { doacaoGet, doacaoPost } from "./doacaoController.js";

const route = express.Router();

/* Página principal */
route.get("/", indexGet);

/* Rotas de entrada e saída */
route.get("/cadastro", cadastroGet);
route.post('/cadastro', cadastroPost);

route.get("/login", loginGet);
route.post('/login', loginPost);

route.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

route.get("/perfil", perfilGet);

route.get("/doacao", doacaoGet);
route.post("/doacao", doacaoPost);

export default route;