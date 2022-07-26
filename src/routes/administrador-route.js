const admController = require('../controllers/administrador-controller')
const routes = require('express').Router()


routes.get('/', admController.index)


module.exports = routes