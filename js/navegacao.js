import animaBarra from "./animaBarra.js";

export default class Navegacao {
  constructor(navbar) {
    this.navbar = navbar;
    this.botoes = document.querySelectorAll(navbar);
  }

  onClick() {
    this.botoes.forEach((botao) => {
      botao.addEventListener("click", (event) => {
        const todasSections = document.querySelectorAll(
          "section[class^='content-']",
        );

        if (event.target.dataset.pagina !== undefined) {
          todasSections.forEach((event) => event.classList.remove("active"));

          this.botoes.forEach((event) => event.classList.remove("active"));

          const alvo = event.target.dataset.pagina;

          const section = document.getElementsByClassName(alvo);
          section[0].classList.add("active");

          const botao = document.querySelector(
            `${this.navbar}[data-pagina=${alvo}]`,
          );
          botao.classList.add("active");

          animaBarra(`.${alvo} .skill`, "span");
        }
      });
    });
  }

  onBind() {
    this.onClick = this.onClick.bind(this);
  }

  onInit() {
    this.onBind();
    this.onClick();
  }
}
