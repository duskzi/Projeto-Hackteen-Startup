  
// Animação do ônibus
const objeto = document.getElementById('bus');
let angulo = 0;

function animar() {
  // Oscilação de rotação entre -30° e +30°
  const rotacao = Math.sin(angulo) * 20;

  // Movimento lateral leve com oscilação
  const deslocamentoX = Math.sin(angulo) * 25; // -45px a +45px
  const deslocamentoY = 20 + Math.sin(angulo * 8) * 3; // Oscilação vertical

  // Aplica rotação e movimento ao mesmo tempo
  objeto.style.transform = `translate(${deslocamentoX}px, ${deslocamentoY}px) rotate(${rotacao}deg)`;

  angulo += 0.02;
  requestAnimationFrame(animar);
}

animar()