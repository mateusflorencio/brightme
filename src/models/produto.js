'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {

    static associate(models) {
      //Produto.belongsTo(models.Categoria, { foreignKey: 'categoriaId' })
      // Produto.belongsTo(models.Fabricante, { foreignKey: 'fabricanteId' })
      Produto.hasMany(models.Image)
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