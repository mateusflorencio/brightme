module.exports = class newProduto {

  constructor(ativo, nome, preco, titulo, descricao, categoriaId, fabricanteId, imgId, estoqueId, promocaoId, kitId) {
    this._ativo = ativo
    this._nome = nome
    this._preco = preco
    this._titulo = titulo
    this._descricao = descricao
    this._categoriaId = categoriaId
    this._fabricanteId = fabricanteId
    this._imgId = imgId
    this._estoqueId = estoqueId
    this._promocaoId = promocaoId
    this._kitId = kitId
  }

  get ativo() {
    return this._ativo
  }

  get nome() {
    return this._nome
  }

  get preco() {
    return this._preco
  }

  get titulo() {
    return this._titulo
  }

  get descricao() {
    return this._descricao
  }

  get categoria() {
    return this._categoria
  }

  get fabricanteId() {
    return this._fabricanteId
  }

  get imgId() {
    return this._imgId
  }

  get estoqueId() {
    return this._estoqueId
  }

  get promocaoId() {
    return this._promocaoId
  }

  get kitId() {
    return this._kitId
  }
}