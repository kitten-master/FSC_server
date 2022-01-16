const express = require('express');
const router = express.Router();
const controller = require('../controllers/usercontroller');
const {validateRegister} = require('../middleware/users');

router.post('/register',validateRegister,controller.insertUserProcess);
router.get('/login',controller.loginProcess);


module.exports = router;
