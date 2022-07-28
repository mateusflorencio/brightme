'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusOS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StatusOS.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatusOS',
  });

  StatusOS.associate = (models) => {
    StatusOS.hasMany(models.OrdemDeServico)
  }

  return StatusOS;
};