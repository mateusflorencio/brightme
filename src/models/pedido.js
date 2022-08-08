'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {

    static associate(models) {
      Pedido.belongsToMany(models.Produto, { through: 'PedidoProdutos', as: 'produtos' })
      Pedido.belongsTo(models.Cliente, { foreignKey: 'clienteId' })
    }
  }
  Pedido.init({
    clienteId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    subtotal: DataTypes.DOUBLE,
    cupomId: DataTypes.INTEGER,
    total: DataTypes.DOUBLE,
    frete: DataTypes.DOUBLE}, {
    sequelize,
    modelName: 'Pedido',
  })

  return Pedido
}