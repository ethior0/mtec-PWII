import { VerificaLogin } from "./verificacao/verificaLogin.js";

class Login {
  constructor() {
    this.formularioLogin = document.querySelector(".formulario-login");
    this.login = [];
    this.eventos();
  }

  eventos() {
    this.formularioLogin.addEventListener("submit", (e) => {
      this.logar(e);
    });
  }

  logar(e) {
    e.preventDefault();

    const emailLogin = this.formularioLogin.querySelector("#login-email");
    const senhaLogin = this.formularioLogin.querySelector("#login-senha");

    if (verificacao.verificaTelaLogin(emailLogin, senhaLogin)) {
      const data = {
        email: emailLogin,
        senha: senhaLogin,
      };

      // fetch("/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then((response) => {
      //     response.json();
      //   })
      //   .then((result) => {
      //     alert("Login concluído");
      //     console.log(result);
      //   })
      //   .catch((error) => {
      //     console.error("Erro ao logar:", error);
      //     alert("Erro no login.");
      //   });
    }
  }
}

const verificacao = new VerificaLogin();
const logar = new Login();
