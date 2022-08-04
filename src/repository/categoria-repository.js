const db = require('../models/index')
const Categoria = db.Categoria

module.exports = class CategoriaRepository {

  async buscarCategoriaId(id) {
    try {
      return await Categoria.findOne({ where: { id } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarTodasCategorias() {
    try {
      return await Categoria.findAll()
    } catch (error) {
      throw new Error(error)
    }
  }

  async criarNovaCategoria(nome) {
    try {
      return await Categoria.create({ nome })
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(id) {
    try {
      await Categoria.destroy({ where: { id } })
    } catch (error) {
      throw new Error(error)
    }
  }
}