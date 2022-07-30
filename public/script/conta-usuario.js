function encerrarSessao(){
  localStorage.removeItem('nome')
  localStorage.removeItem('user')
  localStorage.removeItem('token')

  window.location.href = '/'
}