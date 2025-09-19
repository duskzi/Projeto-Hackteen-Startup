  
// Animação do ônibus
const objeto = document.getElementById('bus');
let angulo = 0;

function animar() {

  // Rotação suave
  const rotacao = Math.sin(angulo) * 20;

  // Efeito do onibus se movendo
  const deslocamentoX = Math.sin(angulo) * 25; // 25 pixel por enquanto?
  const deslocamentoY = 20 + Math.sin(angulo * 8) * 3; // Ajuste da altura e a oscilação

  // Aplica rotação e movimento
  objeto.style.transform = `translate(${deslocamentoX}px, ${deslocamentoY}px) rotate(${rotacao}deg)`;

  angulo += 0.02;
  requestAnimationFrame(animar);
}

animar()