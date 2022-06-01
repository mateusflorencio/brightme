const express = require("express")
const DescricaoProdutoController = require("../controllers/DescricaoProdutoController")

const router = express.Router()

router.get("/", DescricaoProdutoController.index)

module.exports = router