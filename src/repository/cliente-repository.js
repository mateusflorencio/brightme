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

  async delete(id) {
    try {
      return await Cliente.destroy({ where: { id } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async updateEmail(id, email) {
    try {
      return await Cliente.update({ email }, { where: { id } }
      )
    } catch (error) {
      throw new Error(error)
    }
  }

  async updateSenha(id, senha) {
    try {
      return await Cliente.update({ senha }, { where: { id } }
      )
    } catch (error) {
      throw new Error(error)
    }
  }
}


