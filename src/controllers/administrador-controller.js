const AdministradorRepository = require('../repository/administrador-repository')
const CategoriaRepository = require('../repository/categoria-repository')
const Error = require('./error')

const catRepo = new CategoriaRepository()

module.exports = AdministradorController = {
  loginView(_req, res) {
    res.status(200).render('adm-login', { error: '' })
  },
  async login(req, res) {
    const { id, senha } = req.body
    try {
      const result = await AdministradorRepository.login(id, senha)
      if (result.error || !result) {
        return res.status(404).render('adm-login', { error: 'Id ou senha inválido' })
      }
      return res.status(200).redirect('/administrador')
    } catch (error) {
      res.status(500).render('administrador', { error: error })
    }
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
  },
  async criarAdm(req, res) {
    const { nome, senha, ROLE } = req.body
    try {
      const result = await AdministradorRepository.cadastro({ nome, senha, ROLE })
      res.status(201).json(result)
    } catch (error) {
      res.status(500).json({ err: error })
    }
  }
}