const { INTEGER, STRING } = require('sequelize')
const { sequelize } = require('../../data/db')

const Image = sequelize.define('image',{
  id: {
    type: INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },
  url: {
    type: STRING,
    allowNull: false
  }
})

module.exports = Image