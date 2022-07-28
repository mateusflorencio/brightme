

function criarMascaraCpf(){
  const valorInput = document.getElementById('cpf').value

  let mark = `${valorInput.slice(0,3)}.${valorInput.slice(3,6)}.${valorInput.slice(6,9)}.${valorInput.slice(9,11)}`

  if (valorInput.length === 11) {
   ( document.getElementById(`cpf`).value = mark )
  }
}

function criarMascaraTelefone(){
  const valorInput = document.getElementById('telefone').value

  let mark = `(${valorInput.slice(0,2)})${valorInput.slice(2,7)}-${valorInput.slice(7)}`

  if (valorInput.length === 10) {
   ( document.getElementById(`telefone`).value = mark )
  }
}

function senhaEstaCorreta(){
  const senha = document.getElementById('senha').value
  const confirmacaoSenha = document.getElementById('confirmacaoSenha').value
  const span = document.querySelector('.aviso__senha')

  if( senha !== confirmacaoSenha){
    span.innerHTML = '<p class="aviso__senha t-red">Senhas não confere !</p>'}

  if( senha === confirmacaoSenha)
  span.innerHTML = ''
}