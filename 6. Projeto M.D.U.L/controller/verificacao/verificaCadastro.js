export class VerificaCadastro{
  constructor() {
    console.log("Iniciei a verificação");
  }

  verificaTela1(inputs) {
    const camposValidos = this.verificaCamposValidos(inputs);
    const senhasValidas = this.verificaSenha(inputs);

    return camposValidos && senhasValidas;
  }

  verificaTela2(inputs) {
    const camposValidos = this.verificaCamposValidos(inputs);
    
    return camposValidos;
  }

  verificaCamposValidos(inputs) {
    for(let errorText of inputs.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    const inputsArray = inputs.querySelectorAll("input");
    let valid = true;
    
    for (let campo of inputsArray) {
      const label = campo.previousElementSibling.innerText.slice(0, -1).trim();

      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
        continue;
      }
      if (campo.id === "cadastro-email") {
        if (!this.verificaEmail(campo)) valid = false
      }
      if (campo.id === "cadastro-nome") {
        if (!this.verificaNomeUser(campo)) valid = false;
      }
      if (campo.id === "cadastro-tel") {
        if(!this.verificaTelefone(campo)) valid = false;
      }
      if (campo.id === "cadastro-data-nasc") {
        if(!(this.verificaDataNasc(campo))) valid = false;
      }
    }

    return valid;
  }

  verificaEmail(campo) {
    const email = campo.value;
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!regexEmail.test(email)) {
      this.criaErro(campo, `E-mail inválido.`);
      return false;
    }

    return true;
  }

  verificaSenha(inputs) {
    const senhaCampo = inputs.querySelector("#cadastro-senha");
    const repetirSenhaCampo = inputs.querySelector("#cadastro-repete-senha");

    if(senhaCampo.value !== repetirSenhaCampo.value) {
      this.criaErro(senhaCampo, "Campo senha e repetir senha precisam ser iguais.");
      this.criaErro(repetirSenhaCampo, "Campo senha e repetir senha precisam ser iguais.");
      return false;
    }

    if(senhaCampo.value.length < 6 || senhaCampo.value.length > 12) {
      this.criaErro(senhaCampo, "Senha precisa ter entre 6 e 12 caracteres.");
      return false;
    }

    return true;
  }

  verificaNomeUser(campo) {
    const nome = campo.value;

    if(nome.length > 255 || nome.length < 5) {
      this.criaErro(campo, "Usuário precisa ter no mínimo 5 caracteres.");
      return false;
    }

    if(!nome.match(/[a-zA-Z0-9]+/g)) {
      this.criaErro(campo, "Nome de usuário precisa conter apenas letras e/ou números.");
      return false;
    }

    return true;
  }

  verificaTelefone(campo) {
    const telefone = campo.value.replace(/\D/g, '');

    if (!(telefone.length === 11)) {
      this.criaErro(campo, "O telefone precisa ter 11 dígitos.");
      return false;
    }
    if (parseInt(telefone.substring(2, 3)) != 9) {
      this.criaErro(campo, "Telefone celular inválido.");
      return false;
    }

    for (var n = 0; n < 10; n++) {
      var temp = telefone.substring(2);
      if (temp == new Array(9).join(n.toString()) || temp == new Array(10).join(n.toString()) ) return false;
    }
    
    var codigosDDD = [
      11, 12, 13, 14, 15, 16, 17, 18, 19,
      21, 22, 24, 27, 28, 31, 32, 33, 34,
      35, 37, 38, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 51, 53, 54, 55, 61, 62,
      64, 63, 65, 66, 67, 68, 69, 71, 73,
      74, 75, 77, 79, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 91, 92, 93, 94, 95,
      96, 97, 98, 99
    ];

    if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) {
      this.criaErro(campo, "DDD inválido.");
      return false;
    }

    return true;
  }

  verificaDataNasc(campo) {
    const dataNasc = new Date(campo.value);
    const dataAtual = new Date();
    const dataMaior18 = new Date(dataNasc.getUTCFullYear() + 18, dataNasc.getUTCMonth(), dataNasc.getUTCDate());

    console.log(dataAtual.toLocaleDateString(), dataMaior18.toLocaleDateString());
    console.log(dataMaior18 <= dataAtual);

    return dataMaior18 <= dataAtual; /* 1900 -> 1918 <= 2024*/
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}