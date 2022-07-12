const { HasOne, DataTypes } = require('sequelize')
const { sequelize } = require('../../data/db')
const { Cliente, Endereco, Pedido, Status } = require('../')

const OrdemDePedido = sequelize.define('ordem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  pedido : {
    references: {
      model: HasOne(Pedido),
      key: 'id'
    },
    allowNull: false
  },
  endereco: {
    references: {
      model: HasOne(Endereco),
      key: 'id'
    },
    allowNull: false
  },
  status: {
    references: {
      model: HasOne(Status),
      key: 'id'
    }
  },
  cliente : {
    references: {
      model: HasOne(Cliente),
      key: 'id'
    },
    allowNull: false
  }
})

module.exports = OrdemDePedido