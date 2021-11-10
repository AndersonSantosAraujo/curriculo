export default class Relogio {
  constructor(container) {
    this.container = document.querySelector(container);
  }

  atualiza() {
    setInterval(() => {
      this.funcionamento();
    }, 1000);
  }

  funcionamento() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    this.hora.innerText = h <= 9 ? "0" + h : h;
    this.minuto.innerText = m <= 9 ? "0" + m : m;
  }

  relogio() {
    this.hora = document.createElement("span");
    this.hora.classList.add("hora");
    this.container.appendChild(this.hora);

    const doisPontos = document.createElement("span");
    doisPontos.innerText = ":";
    this.container.appendChild(doisPontos);

    this.minuto = document.createElement("span");
    this.minuto.classList.add("minuto");
    this.container.appendChild(this.minuto);

    this.funcionamento();
  }

  onBind() {
    this.relogio = this.relogio.bind(this);
    this.atualiza = this.atualiza.bind(this);
    this.funcionamento = this.funcionamento.bind(this);
  }

  onInit() {
    this.onBind();
    this.relogio();
    this.atualiza();
  }
}
