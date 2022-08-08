const db = require('../models/index')
const Administrador = db.Administrador
const jwt = require('jsonwebtoken')
const { AdministradorRepository, CategoriaRepository, ClienteRepository, FabricanteRepository, ProdutoRepository } = require('../repository')
require('dotenv').config()

const secret = process.env.JWT_TOKEN

const catRepo = new CategoriaRepository()
const cliRepo = new ClienteRepository()
const admRepo = new AdministradorRepository()
const fabricanteRepo = new FabricanteRepository()
const prodRepo = new ProdutoRepository()

module.exports = AdministradorController = {
  //só cria através do insominia ou postman
  buscarAdm: async (req, res) => {
    const { id } = req.params
    try {
      const adm = await AdministradorRepository.buscarId(id)
      return adm instanceof Administrador ? res.status(200).json(adm.id) : res.status(404).json(adm)
    } catch (error) {
      return res.status(500).json(error)
    }
  },
  buscarClienteId: async(req, res) =>{
    const { id } = req.params

    const result = await cliRepo.buscaId(id)

    res.json(result)

  },
  //só cria através do insominia ou postman
  criarAdm: async (req, res) => {
    const { nome, senha, ROLE } = req.body
    try {
      const result = await admRepo.cadastro({ nome, ROLE, senha })
      res.status(201).json(result)
    } catch (error) {
      res.status(500).json({ err: error })
    }
  },
  loginView: (_req, res) => {
    res.status(200).render('adm-login', { error: '' })
  },
  login: async (req, res) => {
    const { id, senha } = req.body
    try {
      const adm = await admRepo.buscarId(id)

      if (adm instanceof Administrador === false) {
        return res.status(404).render('adm-login', { error: 'adm not found' })
      }
      if (senha !== adm.senha) {
        return res.status(404).render('adm-login', { error: 'senha incorreta' })
      }

      const token = jwt.sign({ id }, secret)

      return res.cookie('adm', [adm.id, adm.ROLE, token]).redirect('/administrador')
    } catch (error) {
      return res.status(500).render('adm-login', { error: error })
    }
  },
  painelAdministrativo: async (_req, res) => {
    try {
      const categorias = await catRepo.buscarTodos()
      const fabricante = await fabricanteRepo.buscarTodos()
      const produtos = await prodRepo.buscarTodos()

      if (!categorias || !fabricante) {
        return res.status(500).render('administrador', { data: 'Error. Tente novamente' })
      }

      return res.status(200).render('administrador', { data: { fabricantes: fabricante, categorias: categorias, produtos: produtos } })

    } catch (error) {
      res.status(500).render('error', { error: error })
    }
  },
  criarCategoria: async (req, res) => {
    const { categoria } = req.body

    try {
      const result = await catRepo.criarNovaCategoria(categoria)
      if (result.error) {
        return res.status(500).json(result)
      }
      return res.status(201).redirect('/administrador')

    } catch (error) {
      res.status(500).json(error)
    }
  },
  criarFabricante: async (req, res) => {
    const { fabricante } = req.body

    try {
      const result = await fabricanteRepo.criar(fabricante)
      if (result.error) {
        return res.status(500).json(result)
      }
      return res.status(201).redirect('/administrador')

    } catch (error) {
      res.status(500).json(error)
    }
  },
  deleteCategoria: async (req, res) => {
    const { id } = req.params

    try {
      await catRepo.delete(id)

      res.status(204).json('ok')
    } catch (error) {
      res.status(500).json(error)
    }
  },
  deleteFabricante: async (req, res) => {
    const { id } = req.params

    try {
      await fabricanteRepo.delete(id)

      res.status(204).json('ok')
    } catch (error) {
      res.status(500).json(error)
    }
  }
}