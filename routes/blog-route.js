const blogController = require('../controllers/blog-controller')
const routes = require('express').Router()


routes.get('/', blogController.index)


module.exports = routes