const { DataTypes } = require('sequelize')
const { sequelize } = require('../../data/db')
const { Produto } = require('../')

const Estoque = sequelize.define('estoque',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  produtos: {
    references: {
      model: this.hasMany(Produto),
      key: 'id'
    },
    allowNull: false
  }
})

module.exports = Estoque