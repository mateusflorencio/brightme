'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedido.init({
    clienteId: DataTypes.INTEGER,
    produtoId: DataTypes.INTEGER,
    subtotal: DataTypes.DOUBLE,
    cupomId: DataTypes.INTEGER,
    total: DataTypes.DOUBLE,
    frete: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};