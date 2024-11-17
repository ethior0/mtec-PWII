import { VerificaCadastro } from "./verificacao/verificaCadastro.js";

class Login {
  constructor() {
    this.formularioLogin = document.querySelector(".formulario-login");
    this.formularioCadastro = document.querySelector(".formulario-cadastro");

    this.btnMudarTela = document.querySelector(".btn-mudar-tela");
    this.btnProximo = document.querySelector(".btn-proximo");
    this.btnCadastrar = document.querySelector(".btn-cadastro");
    this.cadastro = [];

    this.eventos();
  }

  eventos() {
    this.formularioLogin.addEventListener("submit", (e) => {
      this.logar(e);
    });

    this.formularioCadastro.addEventListener("submit", (e) => {
      this.cadastrar(e);
    });

    this.btnProximo.addEventListener("click", () => {
      this.trocarInputs();
    });

    this.btnMudarTela.addEventListener("click", () => {
      this.trocarTela();
    });
  }

  logar(e) {
    e.preventDefault();
    
    const emailLogin = this.formularioLogin.querySelector("#login-email");
    const senhaLogin = this.formularioLogin.querySelector("#login-senha");
    console.log(`Email: ${emailLogin.value}\nSenha: ${senhaLogin.value}`);
  }

  cadastrar(e) {
    e.preventDefault();
    const inputs2 = this.formularioCadastro.querySelector(".inputs-2");

    if (verificacao.verificaTela2(inputs2)) {
      this.adicionaInputCadastro();
      console.log(this.cadastro);
      
      const data = { 
        email: this.cadastro[0],
        senha: this.cadastro[1],
        repeteSenha: this.cadastro[2],
        nome: this.cadastro[3],
        telefone: this.cadastro[4], 
        dataNascimento: this.cadastro[5], 
      };

      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        response.json();
      })
      .then(result => {
        alert("Cadastro concluído");
        console.log(result);
      })
      .catch(error => {
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
      if (input.id === "cadastro-tel") inputValor = inputValor.replace(/\D/g, '');
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
    }
  }

  trocarTela() {
    const loginBody = document.querySelector(".login-body");
    const loginCadastro = document.querySelector(".cadastro-body");
    const msg = document.querySelector(".trocar-text");

    if (loginBody.classList.contains("hidden")) {
      loginBody.classList.remove("hidden");
      loginCadastro.classList.add("hidden");

      document.querySelector(".cadastro-img").classList.add("hidden");
      document.querySelector(".login-img").classList.remove("hidden");

      msg.innerText = "Não tem uma conta?"
      this.btnMudarTela.innerHTML = "Crie a sua conta aqui!";
    } else {
      loginCadastro.classList.remove("hidden");
      loginBody.classList.add("hidden");

      document.querySelector(".cadastro-img").classList.remove("hidden");
      document.querySelector(".login-img").classList.add("hidden");

      msg.innerText = "Já possui uma conta?"
      this.btnMudarTela.innerHTML = "Entre aqui!";
    }
  }
}

const verificacao = new VerificaCadastro();
const logar = new Login();