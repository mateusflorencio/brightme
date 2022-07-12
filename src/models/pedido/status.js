const { DataTypes } = require('sequelize')
const { sequelize } = require('../../data/db')

const Status = sequelize.define('status', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'processo não iniciado'
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

module.exports = Status
