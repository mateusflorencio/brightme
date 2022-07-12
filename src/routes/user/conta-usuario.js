const contaUsuarioController = require('../../controllers/user/conta-usuario')
const routes = require('express').Router();


routes.get('/', contaUsuarioController.index)

module.exports = routes