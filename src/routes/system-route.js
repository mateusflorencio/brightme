const { uploadImageCliente } = require('../controllers/system-controler')
const routes = require('express').Router()

routes.post('/upload/image-cliente', uploadImageCliente)

module.exports = routes