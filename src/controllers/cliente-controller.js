const { cpf } = require('cpf-cnpj-validator')
const { validationResult } = require('express-validator')
const { buscarCLiente, ClienteRepository } = require('../repository/index')
const NewClienteDto = require('../models/dto/new-cliente-dto')
const Error = require('./error')

var LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch')

const clienteController = {
    cadastroView: (_req, res) => {
        res.status(200).render('cadastro', { error: '' })
    },
    cadastro: async (req, res) => {
        let { nome, sobrenome, senha, email, telefone, CPF } = req.body
        CPF = CPF.replace(/\W/g, '')
        telefone = telefone.replace(/\W/g, '')

        const errorValidator = validationResult(req)

        try {
            if (!errorValidator.isEmpty()) {
                return res.status(400).render('cadastro', { error: errorValidator.errors })
            }

            const CPFResutl = cpf.isValid(CPF)
            if (!CPFResutl) {
                const errorCPF = new Error('CPF', 'Este CPF não é válido', '')
                return res.status(400).render('cadastro', { error: [errorCPF] })
            }

            const buscarCLienteResult = await buscarCLiente(email, CPF, telefone)
            if (buscarCLienteResult) {
                return res.status(400).render('cadastro', { error: buscarCLienteResult })
            }

            const newCliente = new NewClienteDto(nome, sobrenome, senha, email,telefone, CPF)
            const result = await ClienteRepository.cadastro(newCliente)

            if (!result) {
               return res.status(500).render('cadastro', { error: new Error('cadastro', 'error ao criar novo usuário, por favor tente novamente', '') })
            }

            return res.status(201).render('index')

        } catch (err) {
            const error = new Error('error service', err, '500')
            console.log(err)
            return res.status(500).render('cadastro', { error: error })
        }
    },
    loginView: (_req, res) => {
        res.render('login', { errors: {} })
    },
    login: async (req, res) => {
        try {
            const { email, senha } = req.body
            const result = await clienteRepository.login(email, senha)

            if (result.error) {
                return res.render('login', { errors: result })
            }

            return res.status(200).redirect('/')

        } catch (error) {
            res.status(500).render('error', { errors: error })
        }
    }
}

module.exports = clienteController