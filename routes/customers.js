const express = require('express');
const customersController = require('../controllers/customersController');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Get customer list
router.get('/',[auth,admin], customersController.getCustomerList);

// Register a new customer
router.post('/',customersController.createCustomer);

// Update customer details
router.put('/:id',customersController.updateCustomer);

// Remove customer
router.delete('/:id',[auth,admin],customersController.deleteCustomer);

// Get customer using his id
router.get('/:id',auth,customersController.getCustomerById);

module.exports = router; 