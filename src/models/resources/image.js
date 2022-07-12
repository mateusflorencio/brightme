const { DataTypes } = require('sequelize')
const { sequelize } = require('../../data/db')

const Image = sequelize.define('image',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Image