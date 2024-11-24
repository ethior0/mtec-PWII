import conexao from "./conexao.js";

export async function verificarUsuario(email, senha) {
  const query = `SELECT * FROM tbUser WHERE email = ? AND senha = ?`;
  const data = [email, senha];
  const conn = conexao();

  try {
    const [results] = await conn.query(query, data);

    if (results.length > 0) {
      console.log("Usuário existe", results);
    } else {
      console.log("Usuário não existe", results);
    }
    await conn.end();
    return results;
  } catch (err) {
    console.log('Erro!', err.message);
    return err.message;
  }
}
