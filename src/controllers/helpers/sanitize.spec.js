const { sanitize } = require('./sanitize')


test('should return clean values', () => {
  const valorLimpo =  sanitize('mateus florencio')

  expect(valorLimpo[0]).toEqual('mateusflorencio')
})

test('should return correct value', () => {
    const [nome, hoje] =  sanitize('mateus florencio', 'today Kiss')
    
    expect(nome).toEqual('mateusflorencio')
    expect(hoje).toEqual('todaykiss')
  })

  test('should return clean values', () => {
    const valorLimpo =  sanitize(123456)
  
    expect(valorLimpo[0]).toEqual('123456')
  })