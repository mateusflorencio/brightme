const BlogController = require('../controllers/BlogControler')
const routes = require('express').Router()


routes.get('/', BlogController.index)


module.exports = routes