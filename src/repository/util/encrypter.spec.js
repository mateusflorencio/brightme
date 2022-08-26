const { encrypt } = require('./encrypter')
const bcrypt = require('bcrypt')


test('should return hashed password ', async () => {
  const password = 'any_password'
  jest
    .spyOn(bcrypt, 'hashSync')
    .mockReturnValueOnce('hashed_password')
  const hashedPassword = await encrypt(password)

  expect(hashedPassword).toBe('hashed_password')
})



