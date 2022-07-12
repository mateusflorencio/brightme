const { DataTypes, HasOne } = require('sequelize')
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
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  usuario: {
    references: {
      model: HasOne(Cliente),
      key: 'id'
    }
  }
})

module.exports = Telefone