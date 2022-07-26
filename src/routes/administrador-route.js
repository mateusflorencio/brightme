const admController = require('../controllers/admistrador-controller')
const routes = require('express').Router()


routes.get('/', admController.index)


module.exports = routes