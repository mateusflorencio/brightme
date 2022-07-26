const Error = require('../controllers/error')
const db = require('../models/index')
const Cliente = db.Cliente
const { encrypt, senhaEstaCerta } = require('./util/encrypter')



const ClienteRepository = {
  async buscaEmail(email) {
    const result = await Cliente.findOne({ where: { email } })
    return result
  },

  async buscarTelefone(telefone) {
    const result = await Cliente.findOne({ where: { telefone } })
    return result
  },

  async buscarCpf(cpf) {
    const result = await Cliente.findOne({ where: { cpf } })
    return result
  },

  async login(email, senha) {
    const cliente = await this.findByEmail(email)
    console.log(cliente)

    if (!cliente) {
      return { error: 'email not found' }
    }

    const senhaEstaCertaResult = await senhaEstaCerta(senha, cliente.senha)
    if (!senhaEstaCertaResult) {
      return { error: 'senha incorreta' }
    }
    return true
  },

  async cadastro(obj) {
    const hashedPassword = await encrypt(obj.senha)
    const cliente = await Cliente.create(Object.assign({}, obj, { senha: hashedPassword }))
    return cliente
  }
}

module.exports = ClienteRepository


