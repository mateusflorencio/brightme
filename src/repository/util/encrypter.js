const bcrypt = require('bcrypt')

const saltRounds = 10

async function encrypt(plaintextPassword){
  return bcrypt.hashSync(plaintextPassword, saltRounds, function(err, hash) {
    return hash
  })
}

module.exports = { encrypt }



