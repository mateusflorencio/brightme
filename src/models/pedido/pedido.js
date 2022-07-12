const { HasOne, HasMany, DataTypes } = require('sequelize')
const { sequelize } = require('../../data/db')
const { Cliente, Produto, Cupom } = require('../')

const Pedido = sequelize.define('pedido', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  cliente : {
    references: {
      model: HasOne(Cliente),
      key: 'id'
    },
    allowNull: false
  },
  produtos: {
    references: {
      model: HasMany(Produto),
      key: 'id'
    },
    allowNull: false
  },
  subTotal: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  cupom: {
    references: {
      model: HasOne(Cupom),
      key: 'id'
    }
  },
  frete: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  total: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

module.exports = Pedido