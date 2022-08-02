const db = require('../models/index')
const Fabricante = db.Fabricante

module.exports = class FabricanteRepository {

  async buscarId(id) {
    try {
      return await Fabricante.findOne({ where: { id } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarTodos() {
    try {
      return await Fabricante.findAll()
    } catch (error) {
      throw new Error(error)
    }
  }

  async criar(nome) {
    try {
      return await Fabricante.create({ nome })
    } catch (error) {
      throw new Error(error)
    }

  }
}