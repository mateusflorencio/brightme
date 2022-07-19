'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produto.init({
    ativo: DataTypes.BOOLEAN,
    nome: DataTypes.STRING,
    preco: DataTypes.DOUBLE,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER,
    fabricanteId: DataTypes.INTEGER,
    imgId: DataTypes.INTEGER,
    estoqueId: DataTypes.INTEGER,
    promocaoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
  });

  Produto.associate = (models) => {
    Produto.belongsTo(models.Categoria, { foreignKey: 'categoriaId', as: 'categoria'})
    Produto.belongsTo(models.Estoque, { foreignKey: 'estoqueId', as: 'estoque'})
    Produto.belongsTo(models.Fabricante, { foreignKey: 'fabricanteId', as: 'fabrica'})
    Produto.belongsTo(models.Promocao, { foreignKey: 'promocaoId', as: 'promocao'})
  };

  return Produto;
};