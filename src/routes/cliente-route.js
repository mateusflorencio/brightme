const { adicionarProdCarrinho,atualizarCliente, atualizarImageCliente, cadastro, cadastroView,carrinhoView, contaUsuario, deleteCliente, index, login, loginView } = require('../controllers/cliente-controller')
const { validacaoCadastro } = require('../controllers/validacoes/validacao')
const { isClienteAuth } = require('../middlwares')
const routes = require('express').Router()

routes.get('/', index)
routes.get('/login', loginView)
routes.post('/login', login)

routes.get('/cadastro', cadastroView)
routes.post('/cadastro', validacaoCadastro(), cadastro)

routes.get('/conta', isClienteAuth, contaUsuario)
routes.put('/conta',isClienteAuth, atualizarCliente)
routes.get('/carrinho', isClienteAuth, carrinhoView)
routes.post('/carrinho/adicionar', adicionarProdCarrinho)

routes.post('/upload/image-cliente', atualizarImageCliente)

routes.delete('/conta', isClienteAuth, deleteCliente)

module.exports = routes