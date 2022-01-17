const express = require('express');
const router = express.Router();
const controller = require('../controllers/usercontroller');
const {validateRegister,verifyToken} = require('../middleware/users');

router.post('/register',validateRegister,controller.insertUserProcess);
router.get('/login',controller.loginProcess);
router.get('/users',verifyToken,controller.userVerifyTokenTest);

module.exports = router;
