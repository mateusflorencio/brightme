const produtoController = require('../controllers/produto-controller')
const routes = require('express').Router();


routes.get('/', produtoController.listaTodosOsProdutos)
routes.get('/produto/:id', produtoController.showProduto)

module.exports = routes