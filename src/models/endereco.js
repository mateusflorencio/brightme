'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Endereco.init({
    cep: DataTypes.INTEGER,
    numero: DataTypes.INTEGER,
    logradouro: DataTypes.STRING,
    bairro: DataTypes.STRING,
    complemento: DataTypes.STRING,
    UF: DataTypes.STRING,
    municipio: DataTypes.STRING,
    referencia: DataTypes.STRING,
    clienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Endereco',
  });

  Endereco.associate = (models) => {
    Endereco.belongsTo(models.Cliente, { foreignKey: 'clienteId'})
  };

  return Endereco;
};