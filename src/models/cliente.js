'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasOne(models.Image)
      Cliente.hasMany(models.Carrinho, {as: 'carrinho'})
      Cliente.hasOne(models.Endereco, { as: 'endereco' })
     Cliente.hasMany(models.Pedido, { as: 'pedidos' })
    }
  }

  Cliente.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  })

  return Cliente
}