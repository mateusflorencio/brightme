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

            const user = { id: result.id, email }
            const token = jwt.sign({ email }, secret)

            return res.status(201).render('pre-redirect-cliente', { data: [token, user] })
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

            return res.status(200).render('pre-redirect-cliente', { data: [token, email, result.nome] })
        } catch (error) {
            return res.status(500).render('login', { error: error })
        }
    }
}

module.exports = clienteController