
function encerrarSessao() {
  localStorage.removeItem('nome')
  localStorage.removeItem('id')
  document.cookie.split(";")
    .forEach(function (c) {
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


function deleteConta() {
  fetch('/user/conta', {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: localStorage.getItem('id') })
  }
  ).then((res) => {
    if (res.status == 204) {
      encerrarSessao()
    }
  })
}


function ativarBtnUpdateEmail(){
  document.querySelector('#btnUpdateEmail').disabled = ''
}

function atualizarCliente() {
  const email = document.querySelector('#email').value
  const senha = document.querySelector('#senha').value


  fetch('/user/conta', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'put',
    body: JSON.stringify({ email, senha })
  }).then((res) => {
    if (res.status == 204) {
      encerrarSessao()
    }
  }

  )
}



function senhaEstaCorreta() {
  const senha = document.getElementById('senha').value
  const confirmacaoSenha = document.getElementById('passwordConfirm').value
  const span = document.querySelector('.aviso__senha')

  senha !== confirmacaoSenha ? span.innerHTML = '<p class="aviso__senha t-red">Senhas não confere !</p>' : span.innerHTML = ''

}

function sizeAlertPassword() {
  const senha = document.getElementById('senha').value
  const span = document.querySelector('.aviso__senha__size')
  
  span.innerHTML = '<p class="aviso__senha t-red">Senha deve ser maior que 6 caracteres</p>'
  document.querySelector('#btnSubmitSenha').disabled = 'disabled'
  if(senha.length >= 6){
    span.innerHTML = ''
    document.querySelector('#btnSubmitSenha').disabled = ''
  }
}

