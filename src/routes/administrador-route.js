const admController = require('../controllers/administrador-controller')
const routes = require('express').Router()

routes.get('/login', admController.loginView)
routes.post('/login', admController.login)
routes.get('/', admController.index)
routes.post('/categoria',admController.criarCategoria)
routes.post('/criar',admController.criarAdm)


module.exports = routes