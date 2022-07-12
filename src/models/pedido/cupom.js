const { DataTypes} = require('sequelize')
const { sequelize } = require('../../data/db')

const Cupom = sequelize.define('cupom', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
})

module.exports = Cupom