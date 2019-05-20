const express = require('express');
const router = express.Router();
const movieController = require('../controllers/moviesController')
// Get names of all movies
router.get('/',movieController.createMovie );

// Create new movie
router.post('/', movieController.getMovieList);

// Update movie details
router.put('/:id', movieController.getMovieList);

// Delete a movie
router.delete('/:id',[auth,admin],movieController.deleteMovie);

// Return a specific movie
router.get('/:id', movieController.getMovieById);

module.exports = router; 