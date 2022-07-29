const { cpf } = require('cpf-cnpj-validator')

module.exports = function cpfValidator(any) {
  any = cpf.format(any)
  return cpf.isValid(any)
}
