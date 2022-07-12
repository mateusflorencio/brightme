// path cliente
const Cliente = require('./cliente/cliente')
const Telefone = require('./cliente/telefone')
const Endereco = require('./cliente/endereco')

// path pedido
const Cupom = require('./pedido/cupom')
const OrdemDePedido = require('./pedido/ordem-de-pedido')
const Pedido = require('./pedido/pedido')
const Status = require('./pedido/status')

//path produto
const Categoria = require('./produto/categoria')
const Estoque = require('./produto/estoque')
const Fabricante = require('./produto/fabricante')
const Produto = require('./produto/produto')
const Promocao = require('./produto/promocao')

//path resources
const Image = require('./resources/image')

// path user
const Administrador = require('./user/adm')

module.exports = {
  Cliente, Telefone, Endereco, Categoria, Estoque,
  Fabricante, Produto, Image, Administrador, Cupom, 
  OrdemDePedido, Pedido, Status
}

