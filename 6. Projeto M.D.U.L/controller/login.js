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
      console.log("Cliquei no botão Login");
      this.logar(e);
    });

    this.formularioCadastro.addEventListener("submit", (e) => {
      console.log("Cliquei no botão Cadastrar");
      this.cadastrar(e);
    });

    this.btnProximo.addEventListener("click", () => {
      console.log("Troquei os inputs, agora você pode cadastrar");
      this.trocarInputs();
    });

    this.btnMudarTela.addEventListener("click", () => {
      console.log("Cliquei pra trocar tela");
      this.trocarTela();
    });
  }

  logar(e) {
    e.preventDefault();
    
    const emailLogin = this.formularioLogin.querySelector("#login-email");
    const senhaLogin = this.formularioLogin.querySelector("#login-senha");
    console.log(`Email: ${emailLogin.value}\nSenha: ${senhaLogin.value}`);

    alert("Login concluído");
  }

  cadastrar(e) {
    e.preventDefault();

    const inputs = this.formularioCadastro.querySelector(".inputs-2");
    this.adicionaValoresInput(inputs);
    console.log(this.cadastro);

    alert("Cadastro concluído");
  }

  trocarInputs() {
    const inputs1 = this.formularioCadastro.querySelector(".inputs-1");
    const inputs2 = this.formularioCadastro.querySelector(".inputs-2");
    this.adicionaValoresInput(inputs1);

    inputs1.classList.add("hidden");
    inputs2.classList.remove("hidden");
    this.btnProximo.classList.add("hidden");
    this.btnCadastrar.classList.remove("hidden");
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

  adicionaValoresInput(inputs) {
    for (const input of inputs.querySelectorAll("input")) {
      this.adicionaDado(input.value);
    }
  }

  adicionaDado(value) {
    if (value) {
      this.cadastro.push(value);
    }
  }
}

const logar = new Login();