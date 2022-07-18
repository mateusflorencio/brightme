const clienteController = require('../controllers/cliente-controller')
const routes = require('express').Router();


routes.get('/login', clienteController.login)
routes.post('/login',clienteController.login)
routes.post('/create', clienteController.create)

module.exports = routes