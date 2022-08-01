function encerrarSessao() {
  localStorage.removeItem('nome')
  localStorage.removeItem('id')
  document.cookie.split(";")
    .forEach(function (c) {
      console.log(c);
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
    })
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
      body: JSON.stringify({ img: reader.result, id })
    }).then(setInterval(() => location.reload(), 1000))
  }
}

const telefone = document.querySelector('.telefone').firstChild.nodeValue.trim()
const markTelefone = `(${telefone.slice(0, 2)})${telefone.slice(2, 7)}-${telefone.slice(7)}`
document.querySelector('.telefone').firstChild.nodeValue = markTelefone

const cpf = document.querySelector('.cpf').firstChild.nodeValue.trim()
const markCpf = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}.${cpf.slice(9, 11)}`
document.querySelector('.cpf').firstChild.nodeValue = markCpf
