const { atualizarCliente, cadastro, cadastroView, contaUsuario, deleteCliente, index, login, loginView } = require('../controllers/cliente-controller')
const { validacaoCadastro } = require('../controllers/validacoes/validacao')
const routes = require('express').Router()

routes.get('/', index)
routes.get('/login', loginView)
routes.post('/login', login)
routes.get('/cadastro', cadastroView)
routes.post('/cadastro', validacaoCadastro(), cadastro)
routes.get('/conta', contaUsuario)
routes.put('/conta', atualizarCliente)


routes.delete('/conta', deleteCliente)

module.exports = routes