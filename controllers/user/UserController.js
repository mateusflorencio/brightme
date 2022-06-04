const UserController = {
    registerUser: (_req, res) => {
        res.render('login');
    },
    loginUser: (_req, res) => {
        res.render('login')
    },
    account: (_req, res) => {
        res.render('conta-usuario')
    }
}
module.exports = UserController