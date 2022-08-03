const produtoController = require('../controllers/produto-controller')
const routes = require('express').Router()
const { upload } = require('../middlwares/multer')

routes.get('/', produtoController.listaTodosOsProdutos)
routes.get('/produto/:id', produtoController.showProduto)
routes.get('/criar', produtoController.criarView)

routes.post('/criar', upload.array('image', 3), produtoController.cadastrar)

module.exports = routes