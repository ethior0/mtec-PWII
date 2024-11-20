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
    const inputs = this.formularioLogin.querySelector(".inputs");

    if (verificacao.verificaTelaLogin(inputs)) {
      this.login.push(this.formularioLogin.querySelector("#login-email").value);
      this.login.push(this.formularioLogin.querySelector("#login-senha").value);

      const data = {
        email: this.login[0],
        senha: this.login[1],
      };

      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          response.json();
        })
        .then((result) => {
          alert("Login concluído");
          console.log(result);
        })
        .catch((error) => {
          console.error("Erro ao logar:", error);
          alert("Erro no login.");
        });
    }
  }
}

const verificacao = new VerificaLogin();
const logar = new Login();
