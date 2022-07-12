const { INTEGER, STRING } = require('sequelize')
const { sequelize } = require('../../data/db')

const Administrador = sequelize.define('administrador',{
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
  tipo: STRING
})

module.exports = Administrador