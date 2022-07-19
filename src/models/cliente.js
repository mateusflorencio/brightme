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
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });

  Cliente.associate = (models) => {
    Cliente.hasMany(models.OrdemDeServico)
    Cliente.hasMany(models.Endereco)
  }
  
  return Cliente;
};