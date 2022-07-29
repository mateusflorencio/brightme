const db = require('../models/index')
const Cliente = db.Cliente
const { encrypt } = require('./util/encrypter')

module.exports = class ClienteRepository {

  async buscaEmail(email) {
    try {
      return await Cliente.findOne({ where: { email } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarTelefone(telefone) {
    try {
      return await Cliente.findOne({ where: { telefone } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarCpf(cpf) {
    try {
      return await Cliente.findOne({ where: { cpf } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async cadastro(obj) {
    try {
      return await Cliente.create(obj)
    } catch (error) {
      throw new Error(error)
    }
  }
}


