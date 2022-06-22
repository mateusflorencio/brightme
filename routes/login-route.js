const loginController = require('../controllers/login-controller')
const routes = require('express').Router();


routes.get('/', loginController.index)

module.exports = routes