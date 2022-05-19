const express = require("express")
const routes = express.Router()

const listagemDeProdutoController = require('../controllers/ListagemProdutosControler')


routes.get('/', listagemDeProdutoController.listarProdutos)


module.exports = routes