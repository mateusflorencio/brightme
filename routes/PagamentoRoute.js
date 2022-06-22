const FinalizarCompraControler = require('../controllers/PagamentoController')
const routes = require('express').Router();

routes.get('/', FinalizarCompraControler.index)

module.exports = routes