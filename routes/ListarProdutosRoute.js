const express = require("express")
const routes = express.Router()

const listagemDeProdutoController = require('../controllers/Produto')


routes.get('/', listagemDeProdutoController.index)


module.exports = routes