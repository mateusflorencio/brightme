function encerrarSessao() {
  localStorage.removeItem('nome')
  localStorage.removeItem('user')
  localStorage.removeItem('token')

  window.location.href = '/'
}

changeImage = () => {
  const meuImput = document.getElementById('selecao-arquivo')
  const id = localStorage.getItem('id')
  const reader = new FileReader()
  reader.readAsDataURL(meuImput.files[0])
  reader.onload = function () {
    fetch('/system/upload/image-cliente', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ img: reader.result, id})
    }).then(setInterval(() => location.reload(), 1000))
  }
}
