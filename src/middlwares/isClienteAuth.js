const jwt = require('jsonwebtoken')
const secret = process.env.JWT_TOKEN
require("dotenv").config()

module.exports = isClienteAuth = (req, res, next) => {
  const { cliente } = req.cookies

  try {

    if (!cliente) res.redirect('/user/login')

    const email = cliente[0]
    const token = cliente[1]

    jwt.verify(token, secret, (err, decode) => {

      return decode.email === email ? next() : res.redirect('/user/login')

    })

  } catch (err) {
    res.status(500).render('error', { error: err })

  }
}