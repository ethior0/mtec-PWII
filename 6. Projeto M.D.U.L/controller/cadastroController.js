import { inserirUsuario } from '../model/DAO/insertUsuario.js';
import { verificarUsuario } from '../model/DAO/verificarUsuario.js';

export const cadastroGet = (req, res) => {
  if (req.session.login) {
    const msg = {
      mensagem: "Você já está logado em uma conta!",
      auth: true
    }
    res.render("error", { msg });
  } else {
    res.render("cadastro");
  }
}

export const cadastroPost = async (req, res) => {
  const { email, senha, repeteSenha, nome, telefone, dataNascimento} = req.body;
  try {
    const resultado = await inserirUsuario(email, senha, nome, telefone, dataNascimento);
    
    if (resultado) {
      req.session.login = await verificarUsuario(email, senha);
      res.json({ 
        title: "Cadastro de usuário",
        message: 'Usuário cadastrado com sucesso! ✅' 
      });
    } else {
      res.json({
        title: "Erro no cadastro",
        message: 'Erro. Este e-mail já está em uso. ❌'
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao inserir usuário.', error: err.message });
  }
}