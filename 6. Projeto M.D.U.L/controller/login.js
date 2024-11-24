import { VerificaLogin } from "./verificacao/verificaLogin.js";

class Login {
  constructor() {
    this.formularioLogin = document.querySelector(".formulario-login");
    this.botaoModal = document.querySelector("#modal-button");
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
      this.limparInputs();

      const data = {
        email: this.login[0],
        senha: this.login[1],
      };
      console.log(data);

      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        response.json().then((res) => {
          this.ativarModal(res.message);
        });
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Erro ao logar:", error);
      });

      this.login = [];
    }
  }

  limparInputs() {
    const inputs = this.formularioLogin.querySelector(".inputs");
    for (const input of inputs.querySelectorAll("input")) {
      input.value = "";
    }
  }

  ativarModal(msg) {
    this.botaoModal.click();
    const bodyModal = document.querySelector(".modal-body");
    bodyModal.innerHTML = msg;
  }
}

const verificacao = new VerificaLogin();
const logar = new Login();
