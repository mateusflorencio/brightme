const fs = require('fs')
const { cpfValidator, validationResult } = require('./validacoes')
const { decrypt, encrypt } = require('../repository/util/encrypter')
const { buscarCLiente, ClienteRepository } = require('../repository')
const NewClienteDto = require('../models/dto/new-cliente-dto')
const jwt = require('jsonwebtoken')
const db = require('../models/index')
require('dotenv').config()

const Cliente = db.Cliente
const secret = process.env.JWT_TOKEN
const clienteRepository = new ClienteRepository()

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
            const newCliente = new NewClienteDto(nome, sobrenome, hashedPassword, email, telefone, CPF)
            const result = await clienteRepository.cadastro(newCliente)
            if (!result) {
                return res.status(500).render('cadastro', { error: 'error ao cadastrar usuário', errorValidacao: [] })
            }

            const imgPadrao = fs.readFileSync('public/image/clientes/image-padrao.jpg','base64')
            console.log(imgPadrao);
            fs.writeFileSync(`public/image/clientes/cliente${result.id}`, `data:image/jpeg;base64,${imgPadrao}`)

            const token = jwt.sign({ email }, secret)
            return res
                .status(200)
                .clearCookie('dados')
                .cookie('dados', [email, token])
                .render('pre-redirect-cliente', { data: [result.nome, result.id] })
        } catch (error) {
            console.log(error)
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
                .cookie('dados', [email, token])
                .render('pre-redirect-cliente', { data: [result.nome, result.id] })
        } catch (error) {
            return res.status(500).render('login', { error: error })
        }
    },
    contaUsuario: async (req, res) => {
        try {
            const { dados } = req.cookies
            const email = dados[0]

            if (!email) {
                res.redirect('user/login')
            }

            const cliente = await clienteRepository.buscaEmail(email)
            if (cliente instanceof Cliente !== true) {
                res.status(403).redirect('/user/login')
            }

            const path = `./public/image/clientes/cliente${cliente.id}`
            const image = fs.readFileSync(path, (err, result) => {
                if (err) {
                    console.log(err)
                }
                return result
            })
            res.status(200).render('conta-usuario', { data: { image, cliente } })
        } catch (error) {
            return res.status(500).render('login', { error: error })
        }
    }
}

module.exports = clienteController