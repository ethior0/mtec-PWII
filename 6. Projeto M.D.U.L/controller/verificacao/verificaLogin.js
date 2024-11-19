class VerificaLogin {
  constructor() {
    console.log("Iniciei a verificação do login");
  }

  verificaTelaLogin(email, senha) {
    const camposValidos = this.verificaCamposValidos(email, senha);

    return camposValidos;
  }

  verificaCamposValidos(...inputs) {
    for (let errorText of inputs.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    let valid = true;

    for (let campo of inputs) {
      const label = campo.previousElementSibling.innerText.slice(0, -1).trim();

      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
        continue;
      }
      if (campo.id === "login-email") {
        if (!this.verificaEmail(campo)) valid = false;
      }
      if (campo.id === "login-senha") {
        if (!this.verificaSenha(campo)) valid = false;
      }

    }

    return valid;
  }

  verificaEmail(campo) {
    const email = campo.value;
    const regexEmail =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!regexEmail.test(email)) {
      this.criaErro(campo, `E-mail inválido.`);
      return false;
    }

    return true;
  }

  verificaSenha(inputs) {
    const senhaCampo = inputs.querySelector("#login-senha");

    if (senhaCampo.value.length < 6 || senhaCampo.value.length > 12) {
      this.criaErro(senhaCampo, "Senha precisa ter entre 6 e 12 caracteres.");
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}
