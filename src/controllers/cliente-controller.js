const validarCpf = require('cpf-cnpj-validator')
const { validationResult } = require('express-validator')
const { ClienteRepository, usuarioJaExiste } = require('../repository/index')
const NewClienteDto = require('../models/dto/new-cliente-dto')

const clienteRepository = new ClienteRepository()

var LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch')

const clienteController = {
    cadastroView: (_req, res) => {
        res.status(200).render('cadastro',{errors:{}})
    },
    cadastro: async (req, res) => {
        let {nome, sobrenome, senha, email, telefone, cpf} = req.body
        cpf = validarCpf.cpf.generate()
        let errors = ''
        
        try {
        if(!validarCpf.cpf.isValid(cpf)){
            return res.status(400).render('cadastro',{errors:{errors}})
        }

        errors = await validationResult(req);
        if (!errors.isEmpty()) {
            return  res.status(400).render('cadastro',{errors:errors.array()})
        }

        const usuarioJaExisteResult = await usuarioJaExiste(email,cpf)
        for (const item of usuarioJaExisteResult) {
            if(item!= false) return res.status(400).render('cadastro',{errors:{errors}})
        }

        const newCliente = new NewClienteDto(nome, sobrenome,senha,email,telefone,cpf)
        const result = await clienteRepository.create(newCliente)

        return res.status(201).render('index')
        } catch (error) {
            return  res.status(500).render('error', {errors: error});
        }
    },
    loginView: (_req, res) => {
       res.render('login',{errors: {}})
    },
    login: async (req, res) =>{
        try {
            const { email, senha } = req.body
            const result = await clienteRepository.login(email, senha)

            if(result.error){
             return res.render('login', {errors: result})
            }

            return res.status(200).redirect('/')

        } catch (error) {
            res.status(500).render('error',{errors: error})
        }
    }
}

module.exports = clienteController