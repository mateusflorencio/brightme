const LoginController = require('../controllers/Login')
const routes = require('express').Router();


routes.get('/', LoginController.index)

module.exports = routes