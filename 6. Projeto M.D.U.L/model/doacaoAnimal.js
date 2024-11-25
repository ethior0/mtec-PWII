class CadastroAnimal {
  constructor() {
    this.formularioDoacao = document.querySelector(".formulario-doacao");
    this.botaoModal = document.querySelector("#modal-button");
    this.codUser = Number(document.querySelector(".cod-user").innerHTML);
    this.animal = [];

    this.eventos();
  }

  eventos() {
    this.formularioDoacao.addEventListener("submit", (e) => {
      this.doacao(e);
    });
  }

  doacao(e) {
    e.preventDefault();
    const inputs = this.formularioDoacao.querySelector(".inputs");

    if (true) {
      this.adicionaInputDoacao(inputs);

      const data = {
        nomeAnimal: this.animal[0],
        idadeAnimal: this.animal[1],
        tipoAnimal: this.animal[2],
        especieAnimal: this.animal[3],
        sexoAnimal: this.animal[4],
        tracosAnimal: this.animal[5],
        codDoador: this.codUser
      }

      fetch("/doacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        response.json().then((res) => {
          this.ativarModal(res.title, res.message);
        });
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar animal:", error);
      });

      this.cadastro = [];
    }
  }

  adicionaInputDoacao(inputs) {
    this.adicionaDadoCadastro(inputs);
  }

  adicionaDadoCadastro(inputs) {
    for (const input of inputs.querySelectorAll("input")) {
      let inputValor = input.value;
      /* To com sono = código porco */
      if (input.type === "radio") {
        if (input.checked) {
          this.animal.push(inputValor);
        }
      } else {
        if (input.type === "number") {
          inputValor = Number(inputValor);
        }
        this.animal.push(inputValor);
      }
    }
    this.adicionaDadoTraco();
    this.limparInputs(inputs);
  }

  adicionaDadoTraco() {
    const tracos = this.formularioDoacao.querySelector("#traco");
    this.animal.push(tracos.value);
    tracos.value = "";
  }

  limparInputs(inputs) {
    for (const input of inputs.querySelectorAll("input")) {
      if (input.type === "radio") {
        input.checked = false;
      } else {
        input.value = "";
      }
    }
  }

  ativarModal(title, msg) {
    this.botaoModal.click();
    const titleModal = document.querySelector(".modal-title");
    const bodyModal = document.querySelector(".modal-body");
    titleModal.innerHTML = title;
    bodyModal.innerHTML = msg;
  }
}

const cadastroAnimal = new CadastroAnimal();