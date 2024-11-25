import conexao from "./conexao.js";

export async function inserirAnimal(nomeAnimal, idadeAnimal, tipoAnimal, especieAnimal, sexoAnimal, tracosAnimal, codDoador) {
  const query = `CALL spInsere_Animal(?, ?, ?, ?, ?, ?, ?)`;
  const data = [nomeAnimal, idadeAnimal, tipoAnimal, especieAnimal, sexoAnimal, tracosAnimal, codDoador];
  const conn = conexao();

  try {
    const [results] = await conn.query(query, data);
    console.log('Animal inserido com sucesso:', results);
    await conn.end();
  } catch (err) {
    console.error('Erro ao inserir animal:', err.message);
  }
}