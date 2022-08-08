const { CategoriaRepository, FabricanteRepository, ProdutoRepository, ImageRepository } = require('../repository')
const { NewImageDTO, NewProdutoDTO } = require('../models/dto')
const path = require('path')

const cateRepo = new CategoriaRepository()
const fabRepo = new FabricanteRepository()
const prodRepo = new ProdutoRepository()
const imgRepo = new ImageRepository()

const produtoController = {
    listaTodosOsProdutos: async (_req, res) => {
        try {
            const produtos = await prodRepo.buscarTodosComImage()
            const categorias = await cateRepo.buscarTodos()
            const fabricantes = await fabRepo.buscarTodos()
            // res.json(produtos)
            return res.render('produtos', { data: { produtos: produtos, categorias: categorias, fabricantes: fabricantes } })
        } catch (error) {
            res.render('error', { error: error })
        }
    },
    showProduto: async (req, res) => {
        const { id } = req.params

        try {
            const produto = await prodRepo.buscarIdComImagens(id)
            // res.json(produto)
            return res.render('produto', { data: { produto: produto } })
        } catch (error) {
            res.render('error', { error: error })
        }
        res.status(200).render('produto', { produto: id })
    },
    criarView: async (_req, res) => {
        const cat = await cateRepo.buscarTodos()
        const fab = await fabRepo.buscarTodos()
        return res.render('add-produto', { data: { categorias: cat, fabricantes: fab } })
    },
    cadastrar: async (req, res) => {
        const { nome, titulo, descricao, preco, categoriaId, fabricanteId, qtdEstoque, sizeFiles } = req.body
        try {

            if (!sizeFiles) return res.status(500).render('error', { error: 'todos os campos são obrigatórios' })

            const prod = new NewProdutoDTO(nome, preco, titulo, descricao, categoriaId, fabricanteId, qtdEstoque)
            const resNewCliente = await prodRepo.criar(prod)

            if (!resNewCliente) {
                return res.status(500).render('error', { error: 'error ao criar produto' })
            }

            for (let i = 1; i <= sizeFiles; i++) {

                const pathImages = `./image/produtos/prod${resNewCliente.id}-${i}.jpg`
                const img = new NewImageDTO(pathImages, resNewCliente.id)
                await imgRepo.criar(img)
            }

            res.redirect('/administrador')
        } catch (error) {
            console.log(error)
            res.status(500).render('error', { error: error })
        }
    },
    delete: async (req, res) => {
        const { id } = req.params

        try {
            await prodRepo.delete(id)
            await imgRepo.deleteComProduto(id)

            return res.status(204).json('ok')
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}

module.exports = produtoController