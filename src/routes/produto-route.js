const produtoController = require('../controllers/produto-controller')
const routes = require('express').Router()
const { upload } = require('../middlwares/multer')
const { isAdmAuth } = require('../middlwares')

routes.get('/', produtoController.listaTodosOsProdutos)
routes.get('/produto/:id', produtoController.showProduto)
routes.get('/criar', isAdmAuth, produtoController.criarView)

routes.post('/criar', isAdmAuth, upload.array('image', 3), produtoController.cadastrar)

routes.delete('/delete/:id', isAdmAuth, produtoController.delete)


module.exports = routes