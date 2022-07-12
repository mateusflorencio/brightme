const { DataTypes, HasMany, HasOne} = require('sequelize')
const { sequelize } = require('../../data/db')
const { Categoria, Fabricante, Image} = require('../')

const Produto = sequelize.define('produto', {
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
  images: {
    references: {
      model: HasMany(Image),
      key: 'id'
    }
  },
  categoria: {
    references: {
      model: HasMany(Categoria),
      key: 'id'
    }
  },
  fabricante: {
    references: {
      model: HasOne(Fabricante),
      key: 'id'
    }
  },
  dataEntrada: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  dataSaida: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
})

module.exports = Produto