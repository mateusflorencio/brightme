const db = require('../models/index')
const Image = db.Image

module.exports = class ImageRepository {

  async buscarId(id) {
    try {
      return await Image.findOne({ where: { id } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async buscarTodos() {
    try {
      return await Image.findAll()
    } catch (error) {
      throw new Error(error)
    }
  }

  async criar(objDTO) {
    try {
      await Image.create(objDTO)

    } catch (error) {
      throw new Error(error)
    }
  }
}