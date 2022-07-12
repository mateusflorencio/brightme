const { DataTypes } = require('sequelize')
const { sequelize } = require('../../data/db')

const Administrador = sequelize.define('administrador',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: DataTypes.STRING
})

module.exports = Administrador