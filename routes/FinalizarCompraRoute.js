const FinalizarCompraControler = require('../controllers/FinalizarCompraControler')
const routes = require('express').Router();

routes.get('/', FinalizarCompraControler.index)

module.exports = routes