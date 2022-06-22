const carrinhoController = require('../controllers/carrinho-controller')
const routes = require('express').Router();


routes.get('/', carrinhoController.index)


module.exports = routes