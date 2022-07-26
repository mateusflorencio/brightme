const db = require('../models/index')
const Categoria = db.Categoria
const Error = require('../controllers/error')
const e = require('method-override')

module.exports = class CategoriaRepository {

  async buscarCategoriaId(id) {
    const data = await Categoria.findOne({ where: { id } })
    return data
  }

  async buscarTodasCategorias() {
    const data = await Categoria.findAll()
    return data
  }

  async criarNovaCategoria(nome) {
    try {
      return await Categoria.create({nome})
    } catch (error) {
      return {error: new Error('', error.parent.sqlMessage)}
    }

  }
}