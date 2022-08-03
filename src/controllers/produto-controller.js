const { CategoriaRepository, FabricanteRepository, ProdutoRepository, ImageRepository } = require('../repository')
const { newImageDTO, newProdutoDTO } = require('../models/dto')
const fs = require('fs')
const path = require('path')

const cateRrepo = new CategoriaRepository()
const fabRepo = new FabricanteRepository()
const prodRepo = new ProdutoRepository()
const imgRepo = new ImageRepository()

const produtoController = {
    listaTodosOsProdutos: async (_req, res) => {
        const result = await prodRepo.buscarTodos()
        res.json(result)
    },
    showProduto: (req, res) => {
        const { id } = req.params
        res.status(200).render('produto', { produto: id })
    },
    criarView: async (_req, res) => {
        const cat = await cateRrepo.buscarTodasCategorias()
        const fab = await fabRepo.buscarTodos()
        return res.render('add-produto', { data: { categorias: cat, fabricantes: fab } })
    },
    cadastrar: async (req, res) => {
        const { nome, titulo, descricao, preco, categoriaId, fabricanteId, qtdEstoque, sizeFiles } = req.body
        try {

            const prod = new newProdutoDTO(nome, preco, titulo, descricao, categoriaId, fabricanteId, qtdEstoque)
            const resNewCliente = await prodRepo.criar(prod)

            if (!resNewCliente) {
                return res.status(500).render('error', { error: 'error ao criar produto' })
            }

            for (let i = 1; i <= sizeFiles; i++) {
                const pathImages = path.resolve(__dirname, '..', '..', 'public', 'image', 'produtos', `prod${resNewCliente.id}-${i}`)
                const img = new newImageDTO(pathImages, resNewCliente.id)
                await imgRepo.criar(img)
            }

            res.redirect('/')
        } catch (error) {
            console.log(error)
            res.status(500).render('error', { error: error })
        }
    }
}

module.exports = produtoController