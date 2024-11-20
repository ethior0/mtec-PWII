import { VerificaCadastro } from "./verificacao/verificaCadastro.js";

class Cadastro {
  constructor() {
    this.formularioCadastro = document.querySelector(".formulario-cadastro");
    this.btnProximo = document.querySelector(".btn-proximo");
    this.btnCadastrar = document.querySelector(".btn-cadastro");
    this.cadastro = [];

    this.eventos();
  }

  eventos() {
    this.formularioCadastro.addEventListener("submit", (e) => {
      this.cadastrar(e);
    });

    this.btnProximo.addEventListener("click", () => {
      this.trocarInputs();
    });
  }

  cadastrar(e) {
    e.preventDefault();
    const inputs2 = this.formularioCadastro.querySelector(".inputs-2");

    if (verificacao.verificaTela2(inputs2)) {
      this.adicionaInputCadastro();

      const data = {
        email: this.cadastro[0],
        senha: this.cadastro[1],
        repeteSenha: this.cadastro[2],
        nome: this.cadastro[3],
        telefone: this.cadastro[4],
        dataNascimento: this.cadastro[5],
      };

      fetch("/cadastro", {
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
          alert("Cadastro concluído");
          console.log(result);
        })
        .catch((error) => {
          console.error("Erro ao cadastrar:", error);
          alert("Erro no cadastro.");
        });
    }
  }

  adicionaInputCadastro() {
    const inputs1 = this.formularioCadastro.querySelector(".inputs-1");
    const inputs2 = this.formularioCadastro.querySelector(".inputs-2");

    this.adicionaDadoCadastro(inputs1);
    this.adicionaDadoCadastro(inputs2);
  }

  adicionaDadoCadastro(inputs) {
    for (const input of inputs.querySelectorAll("input")) {
      let inputValor = input.value;
      if (input.id === "cadastro-tel")
        inputValor = inputValor.replace(/\D/g, "");
      this.cadastro.push(inputValor);
    }
  }

  trocarInputs() {
    const inputs1 = this.formularioCadastro.querySelector(".inputs-1");
    const inputs2 = this.formularioCadastro.querySelector(".inputs-2");

    if (verificacao.verificaTela1(inputs1)) {
      /* Muda os inputs e o botão da tela de cadastro*/
      inputs1.classList.add("hidden");
      this.btnProximo.classList.add("hidden");

      inputs2.classList.remove("hidden");
      this.btnCadastrar.classList.remove("hidden");

      /* Porquisse (arrumar depois) =) */
      // const msg = document.querySelector(".trocar-text");
      // msg.innerText = "";
      // this.btnMudarTela.innerHTML = "";
    }
  }
}

const verificacao = new VerificaCadastro();
const cadastrar = new Cadastro();