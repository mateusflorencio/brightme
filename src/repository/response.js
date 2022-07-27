module.exports = ( res, err) => {
  const error = err ? err : false
  const resposta = res ? res : false

  return resposta ? resposta : error
}