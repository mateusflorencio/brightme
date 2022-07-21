const clienteController = require('../controllers/cliente-controller')
const { validacaoCreate } = require('../controllers/validacoes/validacao')
const routes = require('express').Router();


routes.get('/login', clienteController.login)
routes.post('/login',clienteController.login)
routes.post('/create', validacaoCreate(), clienteController.create)

module.exports = routes