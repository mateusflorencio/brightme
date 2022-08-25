'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Fabricante extends Model {
    
    static associate(models) {
      Fabricante.hasMany(models.Produto, { foreignKey: 'fabricanteId' })
    }
  }
  Fabricante.init({
    nome: DataTypes.STRING,
    sede: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fabricante',
  })

  return Fabricante
}