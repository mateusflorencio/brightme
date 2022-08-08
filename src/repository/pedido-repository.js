const db = require('../models/index')
const Pedido = db.Pedido
const Produto = db.Produto

module.exports = class PedidoRepository {

  async buscarId(id) {
    try {
      return await Pedido.findOne({ where: { id }, include: Produto })
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarTodos() {
    try {
      return await Pedido.findAll({ include: [{ model: Produto, as: 'produtos', through: { attributes: [] } }] })
    } catch (error) {
      throw new Error(error)
    }
  }

  async criar(carrinho, clienteId) {
    try {
      console.log(carrinho)

      const pedido = await Pedido.create({ clienteId })

      for (const item of carrinho) {

        const prod = await Produto.findOne({ where: { id: item.produtoId } })
        await pedido.addProduto(prod)
      }
      
      return pedido

    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(id) {
    try {
      return await Pedido.destroy({ where: { id } })
    } catch (error) {
      throw new Error(error)
    }
  }
}