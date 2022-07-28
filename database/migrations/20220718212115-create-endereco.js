'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cep: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      logradouro: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      UF: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      referencia: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enderecos');
  }
};