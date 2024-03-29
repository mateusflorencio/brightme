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

  async buscarIdComImagens(id) {
    try {
      return await Produto.findOne({ where: { id }, include:["Images"] })
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarTodos() {
    try {
      return await Produto.findAll()
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarTodosComImage() {
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

  async delete(id) {
    try {
      return await Produto.destroy({ where: { id } })
    } catch (error) {
      throw new Error(error)
    }
  }
}