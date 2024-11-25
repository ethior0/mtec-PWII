import { verificarUsuario } from '../model/DAO/verificarUsuario.js';

export const loginGet = (req, res) => {
  if (req.session.login) {
    const msg = {
      mensagem: "Você já está logado em uma conta!",
      auth: true
    }
    res.render("error", { msg });
  } else {
    res.render("login");
  }
}

export const loginPost = async (req, res) => {
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
}