const usersControllers = {
    registerUserView: (req, res) => {
        res.render('userRegister');
},
        registerUser: (req, res)=> {
            let {email, password} = req.body

            res.send(`Usuário criado com sucesso, nome: ${name} email: ${email}`);
}
}
module.exports = usersControllers