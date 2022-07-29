const db = require('../models/index')
const Administrador = db.Administrador
require("dotenv").config()

const secret = process.env.JWT_TOKEN

const LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch')

const jwt = require("jsonwebtoken")
const AdministradorRepository = require('../repository/administrador-repository')

const admRepo = new AdministradorRepository()

const ComAuthAdm = (req, res, next) => {

  const token = localStorage.getItem('token')

  if (!token) {
    return res.redirect('/administrador/login')
  }

  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      return res.redirect('/administrador/login')
    }

    admRepo.buscarId(decode.id)
      .then(response => {
       if(response instanceof Administrador){
        next()
      }
      res.redirect('/administrador/login')
      }).catch(err =>{
        res.redirect('/error')
      })
  }
  )
}

module.exports = ComAuthAdm