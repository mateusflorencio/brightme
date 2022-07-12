const { DataTypes } = require('sequelize')
const { sequelize } = require('../../data/db')
const Cliente = require('./cliente')

const Endereco = sequelize.define('endereco', {
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement: true
  },
  cep:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  logradouro: {
    type: DataTypes.STRING,
    allowNull:false
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull:false
  },
  complemento: DataTypes.STRING,
  estado: {
    type: DataTypes.STRING,
    allowNull:false
  },
  municipio: {
    type: DataTypes.STRING,
    allowNull:false
  },
  referecia: DataTypes.STRING
})

module.exports = Endereco