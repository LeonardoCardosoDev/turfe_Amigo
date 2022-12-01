function acao() {
  let modal = document.querySelector(".modal");

  modal.style.display = "block";
  modal_qtdvoltas.style.display = "none";
  cont_inicio.style.display = "none";
}

function fechar() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
  cont_inicio.style.display = "flex";
  modal_qtdvoltas.style.display = "none";
}
function continuar() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
  modal_qtdvoltas.style.display = "block";
}
