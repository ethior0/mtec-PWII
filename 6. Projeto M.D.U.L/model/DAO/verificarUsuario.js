import bcrypt from "bcrypt";
import conexao from "./conexao.js";

export async function verificarUsuario(email, senha) {
  const query = `SELECT * FROM tbUser WHERE email = ?`;
  const data = [email];
  const conn = conexao();

  try {
    const [results] = await conn.query(query, data);

    if (results.length > 0) {
      const usuario = results[0];
      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (senhaValida) {
        console.log("Usuário existe e senha válida", usuario);
        return [usuario]; 
      } else {
        console.log("Senha inválida");
        return []; 
      }
    } else {
      console.log("Usuário não existe", results);
      return []; 
    }
  } catch (err) {
    console.log('Erro!', err.message);
    return err.message;
  } finally {
    await conn.end();
  }
}
