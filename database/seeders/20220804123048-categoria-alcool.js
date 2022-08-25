'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categoria', [{
      nome: 'Aromatizado',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categoria', null, {})

  }
}
