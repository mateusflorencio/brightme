const { NewClienteDTO } = require('../models/dto')
const { ClienteRepository } = require('../repository')
const { encrypt } = require('../repository/util/encrypter')
const fs = require('fs')


const cliRepo = new ClienteRepository()
const imgPadrao = fs.readFileSync('public/image/padrao/image-padrao.jpg', 'base64')

const addClienteToDB = async ({ nome, sobrenome, password, email, telefone, CPF }) => {
  
  const hashedPassword = await encrypt(password)
  const result = await cliRepo.cadastro(new NewClienteDTO(nome, sobrenome, hashedPassword, email, telefone, CPF))

  fs.writeFileSync(`public/image/clientes/cliente${result.id}`, `data:image/jpeg;base64,${imgPadrao}`)

  return result
}

module.exports = {
  addClienteToDB
}