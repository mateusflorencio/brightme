const AdministradorRepository = require('./administrador-repository')
const CategoriaRepository = require('./categoria-repository')
const ClienteRepository = require('./cliente-repository')
const { buscarCLiente } = require('./protocols-cliente')


module.exports = {
  AdministradorRepository,
  buscarCLiente,
  CategoriaRepository,
  ClienteRepository
}
