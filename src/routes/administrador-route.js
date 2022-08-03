const admController = require('../controllers/administrador-controller')
const { isAdmAuth, } = require('../middlwares')
const routes = require('express').Router()

routes.get('/buscar-adm/:id', admController.buscarAdm)
routes.post('/criar', admController.criarAdm)


routes.get('/login', admController.loginView)
routes.post('/login', admController.login)

routes.get('/', isAdmAuth, admController.painelAdministrativo)

routes.post('/categoria', admController.criarCategoria)
routes.post('/fabricante', admController.criarFabricante)




module.exports = routes