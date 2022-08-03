const multer = require('multer')
const { ProdutoRepository } = require('../repository')

const prodRepo = new ProdutoRepository()


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/image/produtos')
  },
  filename: async (req, file, cb) => {
    const result = await prodRepo.buscarTodos()
    const size = result.length
    const extensaoArquivo = file.originalname.split('.')[1]
    cb(null, `prod${size + 1}-${req.files.length}.${extensaoArquivo}`)
  }
})

const upload = multer({ storage })

module.exports = {
  upload
}
