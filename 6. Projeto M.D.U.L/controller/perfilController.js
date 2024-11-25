export const perfilGet = (req, res) => {
  if (!req.session.login) {
    const msg = {
      mensagem: "Você precisa estar logado para acessar essa página!",
      auth: false,
    }
    res.render("error", { msg });
  } else {
    const [user] = req.session.login;
    res.render("perfil", { user: user });
  }
}