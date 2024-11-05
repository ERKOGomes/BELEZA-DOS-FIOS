let indiceSlide = 1;

// Inicializa os slides quando a página carrega
document.addEventListener("DOMContentLoaded", function() {
    mostrarSlides(indiceSlide);
});

// Função que define o slide atual
function maisSlides(n) {
  mostrarSlides(indiceSlide += n);
}

// Função que define o slide atual específico
function slideAtual(n) {
  mostrarSlides(indiceSlide = n);
}

// Função que exibe os slides
function mostrarSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let pontos = document.getElementsByClassName("ponto");
  
  if (n > slides.length) {indiceSlide = 1}    
  if (n < 1) {indiceSlide = slides.length}
  
  // Oculta todos os slides e remove a classe ativa dos pontos
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" ativo", "");
  }
  
  // Exibe o slide atual e marca o ponto correspondente como ativo
  slides[indiceSlide-1].style.display = "block";  
  pontos[indiceSlide-1].className += " ativo";
}

// Inicia a mudança automática dos slides quando a página carrega
function autoSlides() {
  setInterval(function() {
    maisSlides(1);
  }, 6000); // Muda de slide a cada 8 segundos (8000 milissegundos)
}

// Chama a função de slides automáticos
window.addEventListener('load', function() {
  autoSlides();
});
