let contador = 0;
// Variável para controlar se a página já foi atualizada após o redimensionamento
let atualizacaoRealizada = false;

// Função para verificar o redimensionamento e atualizar a página uma vez
function checkAndReloadOnce() {
    // Verifica se a atualização ainda não foi realizada
    if (!atualizacaoRealizada) {
        // Atualiza a página
        location.reload();
        // Define a variável para indicar que a atualização foi realizada
        atualizacaoRealizada = true;
    }
}

// Adiciona um ouvinte de evento para o evento 'resize'
window.addEventListener('resize', checkAndReloadOnce);
function compartilharclicado() {
  let teste = document.getElementById("michelle")
  if (window.matchMedia("(min-width:769px)").matches) {//mediaquery
    clicado = document.getElementById("clickdekstop")
    contador = contador + 1;
    if (contador % 2 == 0) {
      clicado.style.display = "none";
    } if (contador % 2 != 0) {
      clicado.style.display = "flex";
    }
  }

  if (window.matchMedia("(max-width:768px)").matches) {
    clicado = document.getElementById("click")
    contador = contador + 1;
    if (contador % 2 !=0) {
      teste.style.display = "none";
      clicado.style.display = "flex";
    } if (contador % 2 == 0) {
      teste.style.display = "flex";
      clicado.style.display = "none";
    }
  }
}