const fs = require('fs')
const { cpfValidator, validationResult } = require('./validacoes')
const { decrypt, encrypt } = require('../repository/util/encrypter')
const { buscarCliente, ClienteRepository, CarrinhoRepository, PedidoRepository, ProdutoRepository } = require('../repository')
const { NewCarrinhoDTO, NewClienteDTO } = require('../models/dto')
const jwt = require('jsonwebtoken')
const db = require('../models/index')
const { addClienteToDB } = require('../services/add-cliente-to-db')
require('dotenv').config()

const Cliente = db.Cliente
const secret = process.env.JWT_TOKEN
const clienteRepository = new ClienteRepository()
const carrinhoRepository = new CarrinhoRepository()
const prodRepository = new ProdutoRepository()
const pedidoRepository = new PedidoRepository()

const clienteController = {
    index: (_req, res) => {
        res.redirect('user/conta')
    },
    cadastroView: (_req, res) => {
        try {
            return res.status(200).render('cadastro', { error: '', errorValidacao: [] })
        } catch (error) {
            return res.status(500).render('cadastro', { error: error, errorValidacao: [] })
        }
    },
    cadastro: async (req, res) => {
        const { nome, sobrenome, senha, email } = req.body
        let { CPF, telefone } = req.body

        try {
            CPF = await CPF.replace(/\W/g, '')
            telefone = await telefone.replace(/\W/g, '')

            const errorValidator = validationResult(req)
            if (!errorValidator.isEmpty()) (res.status(400).render('cadastro', { error: '', errorValidacao: errorValidator.errors }))

            const cpfIsValid = cpfValidator(CPF)
            if (!cpfIsValid) (res.status(400).render('cadastro', { error: 'Insira um CPF válido', errorValidacao: [] }))

            //
            const clienteJaExiste = await buscarCliente(email, CPF, telefone)
            if (clienteJaExiste) (res.status(400).render('cadastro', { error: clienteJaExiste, errorValidacao: [] }))

            await addClienteToDB({ nome, sobrenome, senha, email, telefone, CPF })

            const cliente = await clienteRepository.buscaId(result.id)
            const token = jwt.sign({ email }, secret)
            return res
                .status(201)
                .clearCookie('cliente')
                .cookie('cliente', [email, token, cliente])
                .render('pre-redirect-cliente', { data: [result.nome, result.id] })
        } catch (error) {
            return res.status(500).render('error', { error: `${error}`, errorValidacao: [] })
        }
    },
    loginView: (_req, res) => {
        return res.status(200).render('login', { error: '' })
    },
    login: async (req, res) => {

        try {
            const { email, senha } = req.body

            const cliente = await clienteRepository.buscaEmail(email)
            if (cliente instanceof Cliente === false) (res.render('login', { error: 'Email não encontrado' }))

            if (await decrypt(senha, cliente.senha)) (res.render('login', { error: 'Senha incorreta' }))

            const token = jwt.sign({ email }, secret)
            return res
                .status(200)
                .clearCookie('cliente')
                .cookie('cliente', [email, token, cliente])
                .render('pre-redirect-cliente', { data: [cliente.nome, result.id] })
        } catch (error) {
            return res.status(500).render('login', { error: error })
        }
    },
    contaUsuario: async (req, res) => {
        try {
            const { cliente } = req.cookies
            const email = cliente[0]

            if (!email) {
                res.redirect('user/login')
            }

            const result = await clienteRepository.buscaEmail(email)
            if (result instanceof Cliente !== true) {
                res.status(403).redirect('/user/login')
            }

            const path = `./public/image/clientes/cliente${result.id}`
            const image = fs.readFileSync(path, (err, result) => {
                if (err) {
                    console.log(err)
                }
                return result
            })

            const pedidos = await pedidoRepository.buscarTodosClienteId(result.id)

            res.status(200).render('conta-usuario', { data: { image, cliente: result, pedidos: pedidos } })
        } catch (error) {
            return res.status(500).render('login', { error: error })
        }
    },
    atualizarCliente: async (req, res) => {
        const { cliente } = req.cookies
        const cookieEmail = cliente[0]
        const { email, senha } = req.body
        try {
            if (!cliente) res.status(400).json('no provided')

            const clienteRes = await clienteRepository.buscaEmail(cookieEmail)
            if (clienteRes instanceof Cliente !== false) res.status(404)
            if (email) await clienteRepository.updateEmail(clienteRes.id, email)

            if (senha) {
                const hashedPassword = await encrypt(senha)
                await clienteRepository.updateSenha(clienteRes.id, hashedPassword)
            }

            return res.status(204).json('okay')
        } catch (error) {
            return res.status(500).json({ err: error })
        }
    },
    deleteCliente: async (req, res) => {
        const { id } = req.body

        try {
            if (!id) {
                return res.status(400).json('id no provide')
            }

            const result = await clienteRepository.delete(id)

            if (!result) {
                return res.status(404).json('id not found')
            }

            return res.status(204).json('ok')

        } catch (error) {
            res.status(500).json({ err: error })
        }
    },
    atualizarImageCliente: (req, res) => {
        const { img, id } = req.body

        try {
            const path = `./public/image/clientes/cliente${id}`

            fs.writeFileSync(path, img, err => {
                if (err) {
                    return '500'
                }
            })
            res.status(200)
        } catch (error) {
            res.status(500)
        }
    },
    carrinhoView: async (req, res) => {
        const { cliente } = req.cookies
        try {
            const email = cliente[2].email
            const clienteRes = await clienteRepository.buscaEmail(email)
            const prods = []
            let total = 0
            for (const cart of clienteRes.carrinho) {
                const res = await prodRepository.buscarIdComImagens(cart.produtoId)
                prods.push(res)
                total += res.preco
            }

            return res.render('carrinho', { data: { produtos: prods, total: total } })

        } catch (error) {
            return res.status(500).render('error', { error: error })
        }
    },
    adicionarProdCarrinho: async (req, res) => {
        const { produtoId, clienteId } = req.body
        let { cliente } = req.cookies
        try {
            const newCart = new NewCarrinhoDTO(clienteId, produtoId)
            const result = await carrinhoRepository.criarNovo(newCart)

            const carrinho = cliente[2].carrinho
            carrinho.push(result.dataValues)
            const clienteWithProduct = Object.assign({}, cliente[2], { carrinho: carrinho })
            cliente.pop()
            cliente.push(clienteWithProduct)

            return res.status(201)
                .clearCookie('cliente')
                .cookie('cliente', cliente).json('ok')
        } catch (error) {
            return res.status(500).json('error')
        }
    },
    deleteOneProdCarrinhoId: async (req, res) => {
        const { id } = req.body

        try {
            await carrinhoRepository.deleteOneProdId(id)

            return res.status(204).json('ok')
        } catch (error) {
            res.status(500).json({ err: error })
        }
    },
    adicionarPedido: async (req, res) => {
        const cliente = req.cookies.cliente[2]
        try {

            const produtos = await pedidoRepository.criar(cliente.carrinho, cliente.id)
            await carrinhoRepository.deleteCarrinhoCliId(cliente.id)
            return res.status('OK').json(produtos)
        } catch (error) {
            res.status(500)
        }
    }
}

module.exports = clienteController