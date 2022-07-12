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
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING
  },
  titulo:{
    type: DataTypes.STRING,
    allowNull: false
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  produtos: {
    references: {
      model: HasMany(Produto),
      key: 'id'
    }
  },
  descontoPorcentagem: DataTypes.INTEGER
})

module.exports = Promocao