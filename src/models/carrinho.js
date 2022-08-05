'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Carrinho extends Model {

    static associate(models) {
      Carrinho.belongsTo(models.Cliente, { foreignKey: 'clienteId' })
    }
  }
  Carrinho.init({
    clienteId: DataTypes.INTEGER,
    produtoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrinho',
  })
  return Carrinho
}