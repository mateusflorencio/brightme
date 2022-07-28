const Error = require('../controllers/error')
const db = require('../models/index')
const response = require('./response')
const Administrador = db.Administrador



const AdministradorRepository = {
  async buscarId(id) {
    try {
      return response(await Administrador.findOne({ where: { id } }))
    } catch (error) {
      return response('', new Error('', error,))
    }
  },
  async login(id, senha) {
    try {
      const adm = await Administrador.findOne({ where: { id } })
      return adm.dataValues.senha === senha ? response(adm.dataValues) : response(false)
    } catch (error) {
      return { error: new Error('error', error) }
    }
  },

  async cadastro(obj) {
    try {
      return response(await Administrador.create(obj))
    } catch (error) {
      return new Error('', error)
    }
  }
}

module.exports = AdministradorRepository