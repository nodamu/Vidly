const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

// Get all genres
router.get('/',genresController.getAllGenres);

// Create a new genre
router.post('/', auth, genresController.createNewGenre);

// Update a genre
router.put('/:id',genresController.updateGenre);

// Remove a genre 
router.delete('/:id', [auth, admin],genresController.deleteGenre);

// Get a particular genre
router.get('/:id', genresController.getGenreById);

module.exports = router;