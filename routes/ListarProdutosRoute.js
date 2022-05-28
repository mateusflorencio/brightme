const express = require("express")
const routes = express.Router()

const listagemDeProdutoController = require('../controllers/ListagemProdutosController')


routes.get('/', listagemDeProdutoController.listarProdutos)


module.exports = routes