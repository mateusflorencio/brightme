const DescricaoProdutoController = require('../controllers/DescricaoProdutoControler')
const routes = require('express').Router();


routes.get('/', DescricaoProdutoController.index)

module.exports = routes