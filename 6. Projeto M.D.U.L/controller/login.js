class Login {
  constructor() {
    this.eventos();
  }

  eventos() {
    document.addEventListener("click", (e) => {
      const el = e.target;
      console.log(el);
    });
  }
}

const logar = new Login();