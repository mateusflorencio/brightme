const ContaUsuarioController = require('../../controllers/user/ContaUsuario')
const routes = require('express').Router();


routes.get('/', ContaUsuarioController.index)

module.exports = routes