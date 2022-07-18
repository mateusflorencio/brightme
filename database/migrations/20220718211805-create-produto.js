'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
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
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING
      },
      categoriaId: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false
      },
      fabricanteId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imgId: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
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
    await queryInterface.dropTable('Produtos');
  }
};