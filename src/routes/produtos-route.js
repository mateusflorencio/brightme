const routes = require("express").Router()
const produtosController = require('../controllers/produtos-controller')


routes.get('/', produtosController.index)

module.exports = routes