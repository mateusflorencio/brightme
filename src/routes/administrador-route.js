const admController = require('../controllers/administrador-controller')
const routes = require('express').Router()

routes.get('/', admController.index)
routes.post('/categoria',admController.criarCategoria)


module.exports = routes