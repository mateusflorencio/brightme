const produtoController = require('../controllers/produto-controller')
const routes = require('express').Router();


routes.get('/', produtoController.index)

module.exports = routes