const { DataTypes, HasMany, HasOne } = require('sequelize')
const { sequelize } = require('../../data/db')
const { Cliente, Image, OrdemDePedido, Telefone } = require('../')

const Cliente = sequelize.define('cliente', {
  id: {
    type: DataTypes.INTEGER ,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefones: {
    references: {
      model: HasMany(Telefone),
      key: 'id'
    }
  },
  cpf: {
    type: DataTypes.STRING,
    unique: true
  },
  image: {
    references: {
      model: HasOne(Image),
      key: 'id'
    }
  },
  ordemDePedido: {
    references:{
      model: HasMany(OrdemDePedido),
      key: 'id'
    }
  }
})

module.exports = Cliente