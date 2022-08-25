'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PedidoProdutos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProdutoId: {
        type: Sequelize.INTEGER,
        references: { model: 'Produtos', key: 'id' },
        onDelete: 'CASCADE'
      },
      PedidoId: {
        type: Sequelize.INTEGER,
        references: { model: 'Pedidos', key: 'id' },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PedidoProdutos')
  }
}