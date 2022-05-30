const UserController = {
    registerUserView: (req, res) => {
        res.render('cadastro_usuario');
},
        registerUser: (req, res)=> {
            let {email, password} = req.body

            res.send(`Usuário criado com sucesso, nome: ${name} email: ${email}`);
}
}
module.exports = UserController