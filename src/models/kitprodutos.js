'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KitProdutos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KitProdutos.init({
    ativo: DataTypes.BOOLEAN,
    produtosId: DataTypes.INTEGER,
    kitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'KitProdutos',
  });

  KitProdutos.associate = function (models) {
    KitProdutos.belongsTo(models.Produto, { foreignKey: 'produtosId' });
    KitProdutos.belongsTo(models.Kit, {
      foreignKey: 'kitId',
    });
  };
  return KitProdutos;
};