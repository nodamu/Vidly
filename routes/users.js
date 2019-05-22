const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const auth = require('../middleware/auth');


// Return Users
router.get('/me', auth, usersController.getUsers);

// Register new User
router.post('/', usersController.registerUser);

module.exports = router; 
