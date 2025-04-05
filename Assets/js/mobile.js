// Função para habilitar o menu mobile
var mySidebar = document.getElementById("mySidebar");
//Abrir o menu mobile
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Fechar botao mobile
function w3_close() {
    mySidebar.style.display = "none";
}