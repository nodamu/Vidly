const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
// Login users
router.post('/',authController.login);

module.exports = router; 
