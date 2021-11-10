import debounce from "./debounce.js";

export default class Resize {
  constructor(componente, largura, delay) {
    this.componentes = document.querySelectorAll(componente);
    this.largura = largura;
    this.valorInicial = [...this.componentes].map(({ innerText }) => innerText);
    this.delay = delay;
  }

  onResize() {
    if (window.innerWidth <= this.largura) {
      [...this.componentes].forEach((componente, index) => {
        componente.innerText = index;
      });
    } else {
      [...this.componentes].forEach((componente, index) => {
        componente.innerText = this.valorInicial[index];
      });
    }
  }

  onEvent() {
    window.addEventListener("resize", this.onResize);
  }

  onBind() {
    this.onEvent = this.onEvent.bind(this);
    this.onResize = debounce(this.onResize.bind(this), this.delay);
  }

  onInit() {
    this.onResize();
    this.onBind();
    this.onEvent();
  }
}
