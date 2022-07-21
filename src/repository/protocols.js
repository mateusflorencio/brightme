const db = require('../models')
const Cliente = db.Cliente

async function usuarioJaExiste(email, cpf) {
  const result = []
  if (email) {
   result.push( await Cliente.findOne({where: {email}}) ? {email: 'email já existe'}: false)

  }
  if (cpf) {
   result.push( await Cliente.findOne({where: {cpf}}) ? {cpf: 'cpf já existe'}: false)
    
  }
  return result

}

module.exports = {
  usuarioJaExiste
}
