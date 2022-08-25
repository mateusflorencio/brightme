const db = require('../models/index')
const Carrinho = db.Carrinho

module.exports = class CarrinhoRepository {

  async buscarId(id) {
    try {
      return await Carrinho.findOne({ where: { id } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarTodos() {
    try {
      return await Carrinho.findAll()
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarTodosPorId(clienteId) {
    try {
      return await Carrinho.findAll({ where: { clienteId } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async criarNovo(newCarrinhoDTO) {
    try {
      return await Carrinho.create(newCarrinhoDTO)
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(id) {
    try {
      await Carrinho.destroy({ where: { id } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async deleteOneProdId(produtoId) {
    try {
     const res =  await Carrinho.findOne({ where: { produtoId } })
     return await Carrinho.destroy({where:{id: res.id}})
    } catch (error) {
      throw new Error(error)
    }
  }

  async deleteCarrinhoCliId(clienteId) {
    try {
     const res =  await Carrinho.destroy({ where: { clienteId } })
     return res
    } catch (error) {
      throw new Error(error)
    }
  }
}