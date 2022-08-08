'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [{
      url: './image/produtos/prod1-1.jpg',
      produtoId: 1,
      clienteId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {})

  }
}
