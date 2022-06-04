const express = require('express');
const router = express.Router();
const UserController = require("../../controllers/user/UserController");

router.get('/login', UserController.loginUser);
router.post("/register", UserController.registerUser);
router.get('/account', UserController.account)

module.exports = router;