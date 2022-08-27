
const sanitize = (...itens) => {
  return itens.map(v => v.toString().trim().replace(/\W/g, '').toLowerCase())
}

module.exports = {
  sanitize
}