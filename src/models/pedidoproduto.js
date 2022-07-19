'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PedidoProduto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PedidoProduto.init({
    produtoId: DataTypes.INTEGER,
    pedidoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PedidoProduto',
  });

  PedidoProduto.associate = (models) => {
    PedidoProduto.belongsTo(models.Pedido, { foreignKey: 'pedidoId'})
    PedidoProduto.belongsTo(models.Produto, { foreignKey: 'produtoId'})
  };

  return PedidoProduto;
};