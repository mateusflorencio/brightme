const routes = require("express").Router()
const indexController = require('../controllers/index-controller')

//controler
routes.get('/', indexController.home)


module.exports = routes