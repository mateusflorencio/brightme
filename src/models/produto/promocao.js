const { INTEGER, BOOLEAN } = require('sequelize')
const { sequelize } = require('../../data/db')
const { Produto } = require('../')

const Promocao = sequelize.define('promocao', {
  id: {
    type: INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  descontoPorcetagem: {
    type: INTEGER,
    allowNull: false
  },
  ativo: {
    type: BOOLEAN,
    allowNull: false
  },
  produto: {
    references:{
      model: Produto,
      key: 'id'
    }
  }
})

module.exports = Promocao