const CategoriaRepository = require('../repository/categoria-repository')

const catRepo = new CategoriaRepository()

module.exports = AdministradorController = {
  loginView(_req, res) {
    res.render('adm-login')
  },
  async index(_req, res) {
    try {

      const data = await catRepo.buscarTodasCategorias()
      const categorias = []
      if (!data) {
        return res.status(500).render('administrador', { data: 'Error ao buscar categoria. Tente novamente' })
      }

      data.map((v, i) => {
        categorias.push(data[i].dataValues)
      })

      return res.status(200).render('administrador', { categoria: categorias })

    } catch (error) {
      res.status(500).render('error')
    }
  },
  criarCategoria: async (req, res) => {
    const { categoria } = req.body

    try {
      const result = await catRepo.criarNovaCategoria(categoria)
      if (result.error) {
        return res.status(500).json(result.error._msg)
      }
      console.log(result)
      return res.status(201).redirect('/administrador')

    } catch (error) {
      res.status(500).json(error)
    }
  }
}