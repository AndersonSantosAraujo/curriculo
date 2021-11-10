export default class Escrita {
  constructor(frase, input, tab) {
    this.frase = frase;
    this.input = document.querySelector(input);
    this.tab = document.querySelector(tab);
    this.tamanhoFrase = frase.length;
    this.i = 1;
  }

  digitacao() {
    const escrita = setInterval(() => {
      this.input.append(this.frase[this.i - 1], this.tab);
      this.i++;
      if (this.i > this.tamanhoFrase) {
        clearInterval(escrita);
      }
    }, this.i * 200);
  }

  tabIntermitente() {
    setInterval(() => {
      this.tab.classList.toggle("hide");
    }, 150);
  }

  onBind() {
    this.tabIntermitente = this.tabIntermitente.bind(this);
    this.digitacao = this.digitacao.bind(this);
  }

  onInit() {
    this.onBind();
    this.tabIntermitente();
    this.digitacao();
  }
}
