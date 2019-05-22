const express = require('express');
const router = express.Router();
const rentalsController = require ('../controllers/rentalsController');

// Get all rentals
router.get('/',rentalsController.getAllRentals);

//  Rent a movie
router.post('/', rentalsController.rentMovie);

// Get a rental with id specified in request body
router.get('/:id',rentalsController.getRentalById);

module.exports = router; 