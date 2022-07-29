
function abrirModal(target) {
  const modal = document.getElementById(target)
  modal.style.cssText = 'display: block'
}

function fecharModal(target) {
  const modal = document.getElementById(target)
  modal.style.cssText = 'display: none'
}

function encerrarSessao(){
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  window.location.pathname = '/'
}