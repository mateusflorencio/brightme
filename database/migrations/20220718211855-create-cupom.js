'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cupoms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      codigo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      porcentagen: {
        type: Sequelize.INTEGER
      },
      desconto: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('Cupoms');
  }
};