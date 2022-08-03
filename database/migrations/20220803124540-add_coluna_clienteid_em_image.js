'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Images', 'clienteId', Sequelize.INTEGER)

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Images', 'clienteId')
  }
}
