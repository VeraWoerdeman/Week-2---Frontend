const collectionController = require('../Controllers/collectionController');
const express = require('express');
const router = express.Router();

router.get('/artists', collectionController.getAllArtists);
router.get('/albums', collectionController.getAllAlbums);

router.get('/albums/:id', collectionController.getAlbumById);
router.get('/artists/:id', collectionController.getArtistById);

router.post('/albums', collectionController.createAlbum);
router.post('/artists', collectionController.createArtist)

// router.put('/album/:id', collectionController.updateAlbum);
// router.put('/artist/:id', collectionController.updateArtist);

// router.delete('/album/:id', collectionController.deleteAlbum);
// router.delete('/artist/:id', collectionController.deleteArtist);

module.exports = router;

