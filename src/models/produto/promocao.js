const { DataTypes, HasMany } = require('sequelize')
const { sequelize } = require('../../data/db')
const { Produto } = require('../')

const Promocao = sequelize.define('promocao', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  descontoPorcetagem: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  produtos: {
    references:{
      model: HasMany(Produto),
      key: 'id'
    }
  }
})

module.exports = Promocao