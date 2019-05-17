const express = require('express');
const customersController = require('../controllers/customersController')
const router = express.Router();


router.get('/', customersController.getCustomerList);

router.post('/',customersController.createCustomer);

router.put('/:id',customersController.updateCustomer);

router.delete('/:id',[auth,admin],customersController.deleteCustomer);

router.get('/:id', customersController.getCustomerById);

module.exports = router; 