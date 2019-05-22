const express = require('express');
const customersController = require('../controllers/customersController');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/',[auth,admin], customersController.getCustomerList);

router.post('/',customersController.createCustomer);

router.put('/:id',customersController.updateCustomer);

router.delete('/:id',[auth,admin],customersController.deleteCustomer);

router.get('/:id',auth,customersController.getCustomerById);

module.exports = router; 