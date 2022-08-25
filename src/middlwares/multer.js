const multer = require('multer')
const fs = require('fs')
const { ProdutoRepository } = require('../repository')

const prodRepo = new ProdutoRepository()
const pathLog = 'src/middlwares/multer-log.txt'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/image/produtos')
  },
  filename: async (req, file, cb) => {
    const result = await prodRepo.buscarTodos()
    const extensaoArquivo = file.originalname.split('.')[1]

    const response = result.length > 0 ? result[result.length - 1].id : readRegisterLog()
    const id = parseInt(response)

    fs.writeFileSync(pathLog, `${id + 1}`)
    cb(null, `prod${id + 1}-${req.files.length}.${extensaoArquivo}`)
  }
})

const upload = multer({ storage })

const readRegisterLog = () => fs.readFileSync(pathLog, 'utf8', (err, data) => {
  if (err) { console.log(err) }
  return data.trim()
})

module.exports = {
  upload
}
