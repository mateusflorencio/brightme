'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {

    static associate(models) {
      Produto.hasMany(models.Image)
      Produto.belongsToMany(models.Pedido, { through: 'PedidoProdutos', as: 'produtos' })
    }
  }
  Produto.init({
    ativo: DataTypes.BOOLEAN,
    nome: DataTypes.STRING,
    preco: DataTypes.DOUBLE,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER,
    fabricanteId: DataTypes.INTEGER,
    qtdEstoque: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
  })

  return Produto
}