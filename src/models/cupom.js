'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cupom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cupom.init({
    ativo: DataTypes.BOOLEAN,
    codigo: DataTypes.INTEGER,
    porcentagen: DataTypes.INTEGER,
    desconto: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Cupom',
  });

  Cupom.associate = (models) => {
    Cupom.belongsTo(models.Produto)
  }
  return Cupom;
};