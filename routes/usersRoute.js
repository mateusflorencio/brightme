const express = require('express');
const router = express.Router();
const usersControllers = require ("../controllers/usersControllers");

router.get("/cadastro", usersControllers.registerUserView);
router.post("/cadastro", usersControllers.registerUser);

module.exports = router;
