const { PedidoRepository } = require('../repository')

const pedidoRepository = new PedidoRepository()

module.exports = systemControler = {

  pagamento: async (req, res) => {
    const { cliente } = req.cookies

    const clienteId = cliente[2].id

    const pedidos =await pedidoRepository.buscarTodosClienteId(clienteId)
    
    res.render('pagamento', { data: { pedidos: pedidos } })
  }
}