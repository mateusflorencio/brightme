const { DataTypes, HasMany } = require('sequelize')
const { sequelize } = require('../../data/db')
const { Produto } = require('../')

const Categoria = sequelize.define('categoria',{
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
  produtos:{
    references:{
      model: HasMany(Produto),
      key: 'id'
    }
  }
})

module.exports = Categoria