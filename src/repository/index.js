const AdministradorRepository = require('./administrador-repository')
const CategoriaRepository = require('./categoria-repository')
const ClienteRepository = require('./cliente-repository')
const FabricanteRepository = require('./fabricante-repository')
const ImageRepository = require('./imagem-repository')
const ProdutoRepository = require('./produto-repository')
const { buscarCLiente } = require('./protocols-cliente')


module.exports = {
  AdministradorRepository,
  buscarCLiente,
  CategoriaRepository,
  ClienteRepository,
  FabricanteRepository,
  ImageRepository,
  ProdutoRepository
}
