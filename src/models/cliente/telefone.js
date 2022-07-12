const { INTEGER } = require('sequelize')
const { sequelize } = require('../data/db')
import Cliente from './cliente'

const Telefone = sequelize.define('telefone',{
  id:{
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: INTEGER
  },
  numero: {
    type: INTEGER(12),
    allowNull: false,
    unique: true
  },
  usuario: {
    references: {
      model: this.hasOne(Cliente),
      key: 'id'
    }
  }
})

module.exports = Telefone