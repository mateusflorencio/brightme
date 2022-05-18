const express = require("express")
const routes = express.Router()

const indexController = require('../controllers/IndexController')


//controler
routes.get('/', indexController.home)


module.exports = routes