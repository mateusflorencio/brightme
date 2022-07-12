const { DataTypes } = require('sequelize')
const { sequelize } = require('../../data/db')

const Fabricante = sequelize.define('fabricante', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: STRING,
    allowNull: false
  },
  sede: DataTypes.STRING
})

module.exports = Fabricante