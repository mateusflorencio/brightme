const { INTEGER, STRING, DATEONLY, BOOLEAN} = require('sequelize')
const { sequelize } = require('../../data/db')
const { Categoria, Fabricante, Image} = require('../')

const Produto = sequelize.define('produto', {
  id: {
    type: INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: STRING,
    allowNull: false
  },
  preco: {
    type: INTEGER,
    allowNull: false
  },
  descricao: {
    type: STRING
  },
  titulo:{
    type: STRING,
    allowNull: false
  },
  ativo: {
    type: BOOLEAN,
    allowNull: false
  },
  image: {
    references: {
      model: Image,
      key: 'id'
    }
  },
  categoria: {
    references: {
      model: Categoria,
      key: 'id'
    }
  },
  fabricante: {
    references: {
      model: Fabricante,
      key: 'id'
    }
  },
  dataEntrada: {
    type: DATEONLY
  },
  dataSaida: {
    type: DATEONLY
  },
})

module.exports = Produto