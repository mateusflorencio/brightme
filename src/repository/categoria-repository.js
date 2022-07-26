const db = require('../models/index')
const Categoria = db.Categoria

module.exports = class CategoriaRepository {

  async buscarCategoriaId(id) {
    const data = await Categoria.findOne({where:{id}})
    return data
  }

  async buscarTodasCategorias() {
    const data = await Categoria.findAll()
    return data
  }

  async criarNovaCategoria(nome) {
    const data = await Categoria.create({nome})
    return data
  }
}