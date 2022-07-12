const { INTEGER } = require('sequelize')
const { sequelize } = require('../../data/db')
const Produto = require('./produto')

const Estoque = sequelize.define('estoque',{
  id: {
    type: INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  quantidade: {
    type: INTEGER,
    allowNull: false
  },
  produtos: {
    references: {
      model: Produto,
      key: 'id'
    },
    allowNull: false
  }
})

module.exports = Estoque