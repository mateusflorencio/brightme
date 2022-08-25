module.exports = class newProduto {

  constructor(nome, preco, titulo, descricao, categoriaId, fabricanteId, qtdEstoque) {
    this.ativo = true
    this.nome = nome
    this.preco = preco
    this.titulo = titulo
    this.descricao = descricao
    this.categoriaId = categoriaId
    this.fabricanteId = fabricanteId
    this.qtdEstoque = qtdEstoque
  }
}