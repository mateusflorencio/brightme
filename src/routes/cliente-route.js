const clienteController = require('../controllers/cliente-controller')
const { validacaoCadastro } = require('../controllers/validacoes/validacao')
const routes = require('express').Router();


routes.get('/login', clienteController.loginView)
routes.post('/login',clienteController.login)
routes.get('/cadastro', clienteController.cadastroView)
routes.post('/cadastro', validacaoCadastro(), clienteController.cadastro)

module.exports = routes