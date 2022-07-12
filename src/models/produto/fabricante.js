const { INTEGER, STRING } = require('sequelize')
const { sequelize } = require('../../data/db')

const Fabricante = sequelize.define('fabricante',{
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
  nome: STRING
})

module.exports = Fabricante