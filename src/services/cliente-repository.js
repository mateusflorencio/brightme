const { User } = require('../models')

const ClienteRepository = {
  login: async function (email, password) {
    const response = await User.findOne({ where: { email: email} })
    return response
  },
  create: async function (nome, sobrenome, password, email, cpf, enderecoId, telefoneId) {
    //const passwordEncrypted = await encrypt(email, password)
    const cliente = {nome:'mateus',sobrenome:'florencio',senha:'senhaEncript',
      email:'email2@mail.com'}
    const response = await User.create(cliente)
  }
}

module.exports = ClienteRepository


