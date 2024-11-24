import conexao from "./conexao.js";

export async function inserirUsuario(email, senha, nome, telefone, dataNascimento) {
  const query = `CALL spInsere_User(?, ?, ?, ?, ?)`;
  const data = [email, senha, nome, telefone, dataNascimento];
  const conn = conexao();

  try {
    const [results] = await conn.query(query, data);
    console.log('Usuário inserido com sucesso:', results);
    await conn.end();
    return true;
  } catch (err) {
    console.error('Erro ao inserir usuário:', err.message);
    return false;
  }
}
