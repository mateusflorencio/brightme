'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {

    static associate(models) {
      Image.belongsTo(models.Produto, { foreignKey: 'produtoId' })
      Image.belongsTo(models.Cliente, { foreignKey: 'clienteId' })
    }
  }
  Image.init({
    url: DataTypes.STRING,
    produtoId: DataTypes.INTEGER,
    clienteId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Image',
  })

  return Image
}