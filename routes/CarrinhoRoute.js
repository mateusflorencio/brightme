const CarrinhoController = require('../controllers/CarrinhoControler')
const routes = require('express').Router();


routes.get('/', CarrinhoController.index)


module.exports = routes