const clienteController = require('../controllers/cliente-controller')
const { validacaoCreate } = require('../controllers/validacoes/validacao')
const routes = require('express').Router();


routes.get('/login', clienteController.loginView)
routes.post('/login',clienteController.login)
routes.get('/cadastro', clienteController.createView)
routes.post('/cadastro', validacaoCreate(), clienteController.create)

module.exports = routes