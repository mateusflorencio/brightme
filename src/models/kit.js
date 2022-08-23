'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kit.init({
    ativo: DataTypes.BOOLEAN,
    produtoId: DataTypes.ARRAY(DataTypes.INTEGER),
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    imageId: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Kit',
  });

  return Kit;
};