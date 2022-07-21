const validarCpf = require('cpf-cnpj-validator')
const { body,validationResult } = require('express-validator')
const {ClienteRepository, usuarioJaExiste} = require('../repository/index')
const NewClienteDto = require('../models/dto/new-cliente-dto')

var LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch')

const clienteController = {
    validateBody: [
    body('nome').notEmpty(),
    body('sobrenome').notEmpty(),
    body('telefone').isLength({min:10, max:11}).notEmpty(),
    body('email').isEmail().notEmpty(),
    body('senha').isLength({min:6}).isAlphanumeric().notEmpty()
],
    create: async (req, res) => {
        let {nome, sobrenome, senha, email, telefone, cpf} = req.body
        cpf = validarCpf.cpf.generate()

        try {
        if(!validarCpf.cpf.isValid(cpf)){
            return res.status(400).json({ errors: 'cpf inválido' });
        }

        const errors = await validationResult(req);
        if (!errors.isEmpty()) {
            return  res.status(400).json({ errors: errors.array() });
        }

        const usuarioJaExisteResult = await usuarioJaExiste(email,cpf)
        for (const item of usuarioJaExisteResult) {
            if(item!= false) return res.status(400).json({errors: usuarioJaExisteResult})
        }

        const newCliente = new NewClienteDto(nome, sobrenome,senha,email,telefone,cpf)
        const result = await ClienteRepository.create(newCliente)

        localStorage.setItem('email', result.email)
        localStorage.setItem('senha', result.senha)

        return res.status(201).render('index')
        } catch (error) {
            return  res.status(500).json({ errors: error});
        }
    },
    login: (req, res) =>{
        res.status(200).render('login')
    }
}

module.exports = clienteController