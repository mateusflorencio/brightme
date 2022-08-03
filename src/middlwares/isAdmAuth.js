const jwt = require("jsonwebtoken")
const secret = process.env.JWT_TOKEN
require("dotenv").config()


const isAdmAuth = (req, res, next) => {
  try {
    const { adm } = req.cookies

    if (!adm) {
      return res.redirect('/administrador/login')
    }

    const id = adm[0]
    const role = adm[1]
    const token = adm[2]

    jwt.verify(token, secret, (err, decode) => {
      if (err) {
        return res.redirect('/administrador/login')
      }
      if (decode.id != id) {
        return res.redirect('/administrador/login')
      }
      next()
    }
    )
  } catch (error) {
    res.status(500).render('error', { error: error })
  }
}

module.exports = isAdmAuth