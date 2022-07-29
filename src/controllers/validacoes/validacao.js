const { body , validationResult} = require('express-validator')

const validacaoCadastro = () => {
  return  [
    body('nome').notEmpty(),
    body('sobrenome').notEmpty(),
    body('telefone').isLength({min:9, max:14}),
    body('email').isEmail().notEmpty(),
    body('CPF').isLength({min:10, max:14}),
    body('senha').isLength({min:6}).isAlphanumeric().notEmpty(),
    body('confirmacaoSenha').notEmpty(),
    ]
}


module.exports = {
  validacaoCadastro, validationResult
};
