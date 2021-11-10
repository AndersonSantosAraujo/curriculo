export default function animaBarra(seletor, filhos) {
  const skills = document.querySelectorAll(seletor);

  skills.forEach((skill) => {
    const indiceSkill = skill.dataset.skill;
    const rankSkill = skill.dataset.rank;
    const barras = skill.querySelectorAll(filhos);

    for (let i = 0; i < rankSkill; i++) {
      setTimeout(() => {
        barras[i].style.background = "rgba(255, 50, 50, 0.8)";
        barras[i].style.boxShadow =
          "2px 2px 4px 0 rgba(255, 50, 50, 0.3), 4px 4px 8px 0 rgba(255, 50, 50, 0.6)";
      }, i * 1000);
    }
  });
}
