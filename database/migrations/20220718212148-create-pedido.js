'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clienteId: Sequelize.INTEGER,
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Aguardando Pagamento'
      },
      subtotal: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      cupomId: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      frete: {
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
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos')
  }
}