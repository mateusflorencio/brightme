const db = require('../models/index')
const Administrador = db.Administrador

class AdministradorRepository {
  //correção logica de busca de adm por id
  async buscarId(id) {
    try {
      const administrador = await Administrador.findOne({ where: { id } })
      return administrador ? administrador : 'Not Found'
    } catch (error) {
      throw new Error(error)
    }
  }

  async cadastro(obj) {
    try {
      return await Administrador.create(obj)
    } catch (error) {
      throw new Error({ 'error ao cadastrar administrador': error })
    }
  }
}

module.exports = AdministradorRepository