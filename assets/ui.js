/* VOLTAR PADRÃO DO SISTEMA */
function goBack(){
  if (window.history.length > 1){
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
}
