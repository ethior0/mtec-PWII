import conexao from "./conexao.js";

export async function inserirAnimal(nomeA, idade, caracteristicas, especie, estado, codDoador) {
  const query = `CALL spInsere_Animal(?, ?, ?, ?, ?, ?)`;
  const data = [nomeA, idade, caracteristicas, especie, estado, codDoador];
  const conn = conexao();

  try {
      const [results] = await conn.query(query, data);
      console.log('Animal inserido com sucesso:', results);
      await conn.end();
      return results;
  } catch (err) {
      console.error('Erro ao inserir animal:', err.message);
      return err.message;
  }
}