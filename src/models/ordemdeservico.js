'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdemDeServico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrdemDeServico.init({
    pedidoId: DataTypes.INTEGER,
    enderecoId: DataTypes.INTEGER,
    statusOPId: DataTypes.INTEGER,
    clienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrdemDeServico',
  });
  return OrdemDeServico;
};