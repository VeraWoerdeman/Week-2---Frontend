const express = require('express');
const collectionController = require ('../Controllers/collectionController.js')
const router = express.Router(); 

router.get('/albums', collectionController.getAllAlbums);
router.get('/artists', collectionController.getAllArtists)
router.get('/artists/:id', collectionController.getArtistById);
router.get('/albums/:id', collectionController.getAlbumById);
router.put('/artists/:id', collectionController.updateArtistById);
router.put('/albums/:id', collectionController.updateAlbumById);
router.delete('/artists/:id', collectionController.deleteArtistById);
router.delete('/albums/:id', collectionController.deleteAlbumById);
router.post('/albums/:id', collectionController.createAlbumById);
router.post('/artists/:id', collectionController.createArtistById);

module.exports = router;
