import { inserirAnimal } from "../model/DAO/insertAnimal.js";

export const doacaoGet = (req, res) => {
  if (!req.session.login) {
    const msg = {
      mensagem: "Você precisa estar logado para acessar essa página!",
      auth: false,
    }
    res.render("error", { msg });
  } else {
    const [user] = req.session.login;
    res.render("doacao", { user: user, auth: true});
  }
}

export const doacaoPost = async (req, res) => {
  console.log("Req no post:", req.body);
  const { nomeAnimal, idadeAnimal, tipoAnimal, especieAnimal, sexoAnimal, tracosAnimal, codDoador } = req.body;

  try {
    const resultado = await inserirAnimal( nomeAnimal, idadeAnimal, tipoAnimal, especieAnimal, sexoAnimal, tracosAnimal, codDoador );

    res.json({ 
      title: "Cadastro de animal",
      message: 'Animal cadastrado com sucesso! ✅' 
    });
    console.log(resultado);
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao inserir animal.', error: err.message });
  }
}