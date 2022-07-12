const { INTEGER, STRING } = require('sequelize')
const { sequelize } = require('../../data/db')
const Produto = require('./produto')

const Categoria = sequelize.define('categoria',{
  id: {
    type: INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: STRING,
    allowNull: false
  },
  produtos:{
    references:{
      model: Produto,
      key: 'id'
    }
  }
})

module.exports = Categoria