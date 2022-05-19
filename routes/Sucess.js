const express = require("express");

const routes = express.Router()

routes.get('/', (_req, res) => {
    res.render('page-success')
})


module.exports = routes