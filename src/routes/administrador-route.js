const admController = require('../controllers/administrador-controller')
const ComAuthAdm = require('../middlwares/auth')
const routes = require('express').Router()

routes.get('/buscar-adm/:id', admController.buscarAdm)
routes.post('/criar', admController.criarAdm)


routes.get('/login', admController.loginView)
routes.post('/login', admController.login)

routes.get('/', admController.painelAdministrativo)

routes.post('/categoria', admController.criarCategoria)




module.exports = routes