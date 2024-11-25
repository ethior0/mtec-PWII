export const indexGet = (req, res) => {
  if (req.session.login) {
    const [user] = req.session.login;
    res.render("index", { user: user, auth: true});
  } else {
    res.render("index");
  }
}