const { INTEGER, BOOLEAN } = require('sequelize')
const { sequelize } = require('../../data/db')

const Cupom = sequelize.define('cupom', {
  id: {
    type: INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  codigo: {
    type: INTEGER,
    allowNull: false
  },
  ativo: {
    type: BOOLEAN,
    allowNull: false
  }
})

module.exports = Cupom