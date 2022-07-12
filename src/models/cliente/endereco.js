const { STRING } = require('sequelize')
const { INTEGER, Sequelize } = require('sequelize')
const { sequelize } = require('../../data/db')
const Cliente = require('./cliente')

const Endereco = sequelize.define('endereco', {
  id:{
    type: INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement: true
  },
  cep:{
    type: INTEGER(9),
    allowNull: false,
  },
  numero: {
    type: INTEGER,
    allowNull:false
  },
  logradouro: {
    type: STRING,
    allowNull:false
  },
  bairro: {
    type: STRING,
    allowNull:false
  },
  complemento: STRING
  ,
  estado: {
    type: STRING,
    allowNull:false
  },
  estado: {
    type: STRING,
    allowNull:false
  },
  municipio: {
    type: STRING,
    allowNull:false
  },
  referecia: STRING
})


module.exports = Endereco