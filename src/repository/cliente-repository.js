const db = require('../models/index')
const { encrypt } = require('./util/encrypter')
const Cliente = db.Cliente


const ClienteRepository = {
  login: async function () {
  },
  create: async function (obj) {

  const hashedPassword = await encrypt(obj.senha)
  return await Cliente.create(Object.assign({},obj,{senha: hashedPassword}))
  }
}

module.exports = ClienteRepository


