const db = require('../models/index')
const { senhaEstaCerta } = require('./util/encrypter')
const Cliente = db.Cliente


class ClienteRepository {
  async findByEmail(email){
      const result = await Cliente.findOne({where:{email}})
      return result? result : false
  }

  async login (email,  senha) {
    
    const cliente = await this.findByEmail(email)
    console.log(cliente);
    
    if(!cliente){
     return {error:'email not found'}
    }

    const senhaEstaCertaResult = await senhaEstaCerta(senha, cliente.senha)
    if(!senhaEstaCertaResult){
      return {error:'senha incorreta'}
    }
    return true
  }

  async create (obj) {
    const hashedPassword = await encrypt(obj.senha)
    return await Cliente.create(Object.assign({},obj,{senha: hashedPassword}))
  }
}

module.exports = ClienteRepository


