const ClienteRepository = require('./cliente-repository')

const clienteRepository = new ClienteRepository()
async function buscarCLiente(email, CPF, telefone) {

  const result = []

  if (email) {
    const resultBuscaEmail = await clienteRepository.buscaEmail(email)
    resultBuscaEmail ? result.push(' Email já existe ') : ''
  }
  if (CPF) {
    const resultBuscaCpf = await clienteRepository.buscarCpf(CPF)
    resultBuscaCpf ? result.push(' CPF já Existe ') : ''
  }

  if (telefone) {
    const resultBuscaTelefone = await clienteRepository.buscarTelefone(telefone)
    resultBuscaTelefone ? result.push(' Telefone já existe ') : ''
  }

  return result.length > 0 ? result.join() : false
}

module.exports = {
  buscarCLiente
}
