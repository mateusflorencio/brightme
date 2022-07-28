const produtoController = {
    listaTodosOsProdutos: (_req, res) => {
        res.render('produtos')
    },
    showProduto: (req, res) => {
        const { id } = req.params
        res.status(200).render('produto', { produto: id })
    }
}

module.exports = produtoController