'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promocao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Promocao.init({
    ativo: DataTypes.BOOLEAN,
    produtoId: DataTypes.INTEGER,
    porcentagen: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Promocao',
  });
  return Promocao;
};