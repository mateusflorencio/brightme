'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PedidoProdutos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PedidoProdutos.init({
    produtoId: DataTypes.INTEGER,
    pedidoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PedidoProdutos',
  })

  return PedidoProdutos
}