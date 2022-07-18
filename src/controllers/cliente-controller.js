const ClienteRepository = require('../services/cliente-repository')

const clienteController = {
    create: async (req, res) => {
       await ClienteRepository.create("a", "b", "b", "d", "e", "f", "g")
        res.send('ok')
    },
    login: (req, res) =>{
        const { email, password } = req.body
        if(!email && !password)
        res.render('login')
       res.send(email)
    }
}

module.exports = clienteController