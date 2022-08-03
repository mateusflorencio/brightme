'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Images', 'produtoId', Sequelize.INTEGER)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Images', 'produtoId')
  }
}
