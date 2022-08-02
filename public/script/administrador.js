
function abrirModal(target) {
  const modal = document.getElementById(target)
  modal.style.cssText = 'display: block'
}

function fecharModal(target) {
  const modal = document.getElementById(target)
  modal.style.cssText = 'display: none'
}

function encerrarSessao() {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  document.cookie.split(";")
    .forEach(function (c) {
      console.log(c)
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
    })
  window.location.pathname = '/'
}