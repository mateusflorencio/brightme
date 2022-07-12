// path cliente
const Cliente = require('./cliente/cliente')
const Telefone = require('./cliente/telefone')
const Endereco = require('./cliente/endereco')

//path produto
const Categoria = require('./produto/categoria')
const Estoque = require('./produto/estoque')
const Fabricante = require('./produto/fabricante')
const Produto = require('./produto/produto')

//path resources
const Image = require('./resources/image')

// path user
const Administrador = require('./user/adm')

module.exports = {
  Cliente, Telefone, Endereco, Categoria, Estoque,
  Fabricante, Produto, Image, Administrador
}

