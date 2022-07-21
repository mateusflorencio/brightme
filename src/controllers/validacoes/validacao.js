const { body } = require('express-validator')

const validacaoCreate = () => {
  return  [
    body('nome').notEmpty(),
    body('sobrenome').notEmpty(),
    body('telefone').isLength({min:10, max:11}).notEmpty(),
    body('email').isEmail().notEmpty(),
    body('senha').isLength({min:6}).isAlphanumeric().notEmpty()]
}


module.exports = {
  validacaoCreate
};
