'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fabricante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fabricante.init({
    nome: DataTypes.STRING,
    sede: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fabricante',
  });

  Fabricante.associate = (models) => {
    Fabricante.hasMany(models.Produto, {as: 'fabricante'})
  }
  return Fabricante;
};