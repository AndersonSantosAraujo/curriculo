import Escrita from "./escrita.js";
import Relogio from "./relogio.js";
import Navegacao from "./navegacao.js";
import Resize from "./resize.js";
import fonte from "./fonte.js";

const escrita = new Escrita(
  "Missão: Trainee/Jr. Dev Front-End",
  ".missao h2",
  ".missao h2 span",
);
escrita.onInit();

const relogio = new Relogio(".relogio");
relogio.onInit();

const navegacao = new Navegacao(".intranav a");
navegacao.onInit();

const resize = new Resize(".intranav a", 890, 75);
resize.onInit();

fonte();
// ------------------------------------------------------ TEST AREA
