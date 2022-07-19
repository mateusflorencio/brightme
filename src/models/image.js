'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Image.init({
    url: DataTypes.STRING,
    relacaoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });

  Image.associate = (models) => {
    Image.belongsTo(models.Pedido, { foreignKey: 'relacaoId'})
    Image.belongsTo(models.Cliente, { foreignKey: 'relacaoId'})
  };

  return Image;
};