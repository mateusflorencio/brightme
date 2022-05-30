const express = require('express');
const router = express.Router();
const UserController = require ("../controllers/UserController");

router.get("/cadastro_usuario", UserController.registerUserView);
router.post("/cadastro_usuario", UserController.registerUser);

module.exports = router;
