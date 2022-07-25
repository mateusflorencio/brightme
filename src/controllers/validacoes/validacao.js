const { body } = require('express-validator')

const validacaoCadastro = () => {
  return  [
    body('nome').notEmpty(),
    body('sobrenome').notEmpty(),
    body('telefone').isLength({min:10, max:11}).notEmpty(),
    body('email').isEmail().notEmpty(),
    body('senha').isLength({min:6}).isAlphanumeric().notEmpty()]
}


module.exports = {
  validacaoCadastro
};
