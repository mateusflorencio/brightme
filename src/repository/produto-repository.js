const db = require('../models/index')
const Produto = db.Produto

module.exports = class ProdutoRepository {

  async buscarId(id) {
    try {
      return await Produto.findOne({ where: { id } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarTodos() {
    try {
      return await Produto.findAll({ include: ['Images'] })
    } catch (error) {
      throw new Error(error)
    }
  }

  async criar(obj) {
    try {
      return await Produto.create(obj)
    } catch (error) {
      throw new Error(error)
    }
  }
}