'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Administradors', [{
      nome: 'John Doe',
      ROLE: 'admin',
      senha: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Administradors', null, {})
  }
}
