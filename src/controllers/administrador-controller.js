const CategoriaRepository = require('../repository/categoria-repository')

const catRepo = new CategoriaRepository()

module.exports = AdministradorController = {

  async index(_req, res) {
    res.status(200).render('administrador', { dados: {} })
  },
  criarCategoria:async (req,res) => {
    const { categoria } = req.body

    try {
      const result = await catRepo.criarNovaCategoria(categoria)
      if(result.error){
        return res.status(500).json(result.error._msg)
      }
      console.log(result);
      return res.status(201).redirect('/administrador')
      
    } catch (error) {
      console.log(error);
    }
  }
}