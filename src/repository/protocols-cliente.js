
const Cliente = require('./cliente-repository')

async function buscarCLiente(email, CPF, telefone) {

  const result = []

  if (email) {
    const resultBuscaEmail= await Cliente.buscaEmail(email)
    resultBuscaEmail ? result.push({param:'Email', msg: 'já existe', value: resultBuscaEmail}) : ''
  }
  if (CPF) {
    const resultBuscaCpf= await Cliente.buscarCpf(CPF)
    resultBuscaCpf ? result.push({param:'Cpf', msg: 'já existe', value: resultBuscaCpf}) : ''
  }

  if (telefone) {
    const resultBuscaTelefone= await Cliente.buscarTelefone(telefone)
    resultBuscaTelefone ? result.push({param:'Telefone', msg: 'já existe', value: resultBuscaTelefone}) : ''
  }
  
  result.length === 0 ? false : result
}

module.exports = {
  buscarCLiente
}
