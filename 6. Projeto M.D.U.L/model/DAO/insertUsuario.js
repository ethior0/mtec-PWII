import bcrypt from "bcrypt";
import conexao from "./conexao.js";

export async function inserirUsuario(email, senha, nome, telefone, dataNascimento) {
  const saltRounds = 10; 
  const hashedPassword = await bcrypt.hash(senha, saltRounds);
  console.log(hashedPassword);

  const query = `CALL spInsere_User(?, ?, ?, ?, ?)`;
  const data = [email, hashedPassword, nome, telefone, dataNascimento];
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
