const routes = require('express').Router()
const {isClienteAuth} = require('../middlwares')
const { pagamento } = require('../controllers/system-controler')


routes.get('/pagamento',isClienteAuth, pagamento )

module.exports = routes