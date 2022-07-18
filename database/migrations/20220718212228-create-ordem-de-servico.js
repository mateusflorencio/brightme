'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrdemDeServicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedidoId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      enderecoId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      statusOPId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('OrdemDeServicos');
  }
};