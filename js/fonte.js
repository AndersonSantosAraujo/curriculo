export default function fonte() {
  const arr = ["display", "arial"];
  const fonte = document.querySelector(".fonte");
  let fontePadrao = window.localStorage.getItem("fonteF");

  if (fontePadrao) {
    document.querySelector("body").classList.remove("display", "arial");
    document.querySelector("body").classList.add(fontePadrao);
  } else {
    fontePadrao = document.querySelector("body").classList[0];
    window.localStorage.setItem("fonteF", fontePadrao);
  }

  fonte.addEventListener("click", () => {
    document.querySelector("body").classList.remove(fontePadrao);
    document
      .querySelector("body")
      .classList.add(fontePadrao == "display" ? "arial" : "display");
    fontePadrao = document.querySelector("body").classList[0];
    window.localStorage.setItem("fonteF", fontePadrao);
  });
}
