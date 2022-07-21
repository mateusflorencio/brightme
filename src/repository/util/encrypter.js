const bcrypt = require('bcrypt')

const saltRounds = 10

async function encrypt(senha){
  return bcrypt.hashSync(senha, saltRounds, function(err, hash) {
    return hash
  })
}

async function senhaEstaCerta(senha, hash){
  return bcrypt.compareSync(senha, hash, function(err, result) {
    return result
  })
}

module.exports = { encrypt, senhaEstaCerta }



