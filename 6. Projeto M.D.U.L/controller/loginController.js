import bcrypt from "bcrypt";
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
    // Comparar a senha fornecida com a senha armazenada (criptografada)
    const user = await verificarUsuario(email, senha);

    const senhaValida = await bcrypt.compare(senha, user[0].senha);

    // Verificar se o usuário foi encontrado e se contém a senha
    if (!user || user.length === 0 || !user[0].senha) {
      return res.status(400).json({
        title: "Erro no login",
        message: "E-mail ou senha inválidos. ❌",
      });
    }

    if (!senhaValida) {
      return res.status(400).json({
        title: "Erro no login",
        message: "Erro. E-mail ou senha inválidos. ❌",
      });
    }

    // Se a senha for válida, fazer login
    req.session.login = user;
    res.json({ 
      title: "Login de usuário",
      message: 'Usuário logado com sucesso! ✅' 
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao logar usuário.', error: err.message });
  }
}