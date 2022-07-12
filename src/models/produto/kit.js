const { INTEGER, BOOLEAN, STRING } = require('sequelize')
const { sequelize } = require('../../data/db')
const { Produto } = require('../')

const Promocao = sequelize.define('promocao', {
  id: {
    type: INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  preco: {
    type: DOUBLE,
    allowNull: false
  },
  descricao: {
    type: STRING
  },
  titulo:{
    type: STRING,
    allowNull: false
  },
  ativo: {
    type: BOOLEAN,
    allowNull: false
  },
  produtos: {
    references: {
      model: Produto,
      key: 'id'
    }
  },
  descontoPorcentagem: {
    type: INTEGER
  }
})

module.exports = Promocao