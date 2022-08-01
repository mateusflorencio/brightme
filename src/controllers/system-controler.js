const fs = require('fs')

module.exports = systemControler = {
  uploadImageCliente: (req, res) => {
    const { img, id } = req.body

    try {
      const path = `./public/image/clientes/cliente${id}`

      fs.writeFileSync(path, img, err => {
        if (err) {
          console.error(err)
          return
        }
      })

      res.status(201)
    } catch (error) {
      res.status(500)
    }
  }
}