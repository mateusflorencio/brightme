'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KitProdutos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      produtosId: {
        type: Sequelize.INTEGER
      },
      kitId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('KitProdutos');
  }
};