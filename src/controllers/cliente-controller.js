const fs = require('fs')
const { cpfValidator, validationResult } = require('./validacoes')
const { decrypt, encrypt } = require('../repository/util/encrypter')
const { buscarCLiente, ClienteRepository, CarrinhoRepository, PedidoRepository, ProdutoRepository } = require('../repository')
const { NewCarrinhoDTO, NewClienteDTO } = require('../models/dto')
const jwt = require('jsonwebtoken')
const db = require('../models/index')
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
        let { nome, sobrenome, senha, email, telefone, CPF } = req.body

        try {
            CPF = await CPF.replace(/\W/g, '')
            telefone = await telefone.replace(/\W/g, '')

            const errorValidator = validationResult(req)
            if (!errorValidator.isEmpty()) {
                return res.status(400).render('cadastro', { error: '', errorValidacao: errorValidator.errors })
            }

            const CPFResutl = cpfValidator(CPF)
            if (!CPFResutl) {
                return res.status(400).render('cadastro', { error: 'cpf não é válido', errorValidacao: [] })
            }

            const buscarCLienteResult = await buscarCLiente(email, CPF, telefone)
            if (buscarCLienteResult) {
                return res.status(400).render('cadastro', { error: buscarCLienteResult, errorValidacao: [] })
            }
            const hashedPassword = await encrypt(senha)
            const newCliente = new NewClienteDTO(nome, sobrenome, hashedPassword, email, telefone, CPF)
            const result = await clienteRepository.cadastro(newCliente)
            if (!result) {
                return res.status(500).render('cadastro', { error: 'error ao cadastrar usuário', errorValidacao: [] })
            }

            const imgPadrao = fs.readFileSync('public/image/clientes/image-padrao.jpg', 'base64')
            console.log(imgPadrao)
            fs.writeFileSync(`public/image/clientes/cliente${result.id}`, `data:image/jpeg;base64,${imgPadrao}`)

            const cliente = await clienteRepository.buscaId(result.id)
            const token = jwt.sign({ email }, secret)
            return res
                .status(200)
                .clearCookie('dados')
                .cookie('cliente', [email, token, cliente])
                .render('pre-redirect-cliente', { data: [result.nome, result.id] })
        } catch (error) {
            return res.status(500).render('error', { error: `catch : ${error}`, errorValidacao: [] })
        }
    },
    loginView: (_req, res) => {
        return res.status(200).render('login', { error: '' })
    },
    login: async (req, res) => {

        try {
            const { email, senha } = req.body
            const result = await clienteRepository.buscaEmail(email)

            if (result instanceof Cliente === false) {
                return res.render('login', { error: 'Email não encontrado' })
            }

            const resultSenha = await decrypt(senha, result.senha)
            if (!resultSenha) {
                return res.render('login', { error: 'Senha incorreta' })
            }

            const token = jwt.sign({ email }, secret)
            return res
                .status(200)
                .clearCookie('dados')
                .cookie('cliente', [email, token, result])
                .render('pre-redirect-cliente', { data: [result.nome, result.id] })
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
            res.status(200).render('conta-usuario', { data: { image, cliente: result } })
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