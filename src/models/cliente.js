'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    enderecoId: DataTypes.ARRAY(DataTypes.INTEGER),
    ordemDeServicoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};