const pagamentoController = require('../controllers/pagamento-controller')
const routes = require('express').Router();

routes.get('/', pagamentoController.index)

module.exports = routes