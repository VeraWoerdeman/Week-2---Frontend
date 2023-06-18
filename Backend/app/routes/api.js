const collectionController = require('./app/controllers/collectionController');
const genreController = require('./app/controllers/genreController');
const express = require('express');
const router = express.Router();

// Album routes
router.get('/albums', collectionController.getAllAlbums);
router.get('/artists', collectionController.getAllArtists);
router.get('/albums/:id', collectionController.getAlbumById);
router.post('/albums', collectionController.createAlbum);
router.put('/albums/:id', collectionController.updateAlbum);
router.delete('/albums/:id', collectionController.deleteAlbum);

// Genre routes
router.get('/genres', genreController.getAllGenres);
router.get('/genres/:id', genreController.getGenreById);
router.post('/genres', genreController.createGenre);

module.exports = router;
