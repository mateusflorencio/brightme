const db = require('../models/index')
const Categoria = db.Categoria
const Error = require('../controllers/error')
const response = require('./response')

module.exports = class CategoriaRepository {

  async buscarCategoriaId(id) {
    const data = await Categoria.findOne({ where: { id } })
    return data
  }

  async buscarTodasCategorias() {
    try {
      return response(await Categoria.findAll())
    } catch (error) {
      return response('', new Error('', error.parent.sqlMessage))
    }
  }

  async criarNovaCategoria(nome) {
    try {
      return await Categoria.create({ nome })
    } catch (error) {
      return { error: new Error('', error.parent.sqlMessage) }
    }

  }
}