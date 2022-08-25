'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [{
      nome: 'Essência Abacaxi',
      preco: 10,
      titulo: 'Essência Abacaxi elimina 99,99% das bacterias',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi aliquam alias? A impedit nesciunt id aut facilis itaque vel pariatur, laudantium molestias maiores mollitia sunt ipsam consectetur eos ipsum',
      categoriaId: 1,
      fabricanteId: 1,
      qtdEstoque: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {})
  }
}
