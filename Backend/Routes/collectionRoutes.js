
const express = require('express');
const collectionController = require ('../Controllers/collectionController.js')
const router = express.Router(); 

router.get('/albums', collectionController.getAllAlbums);
router.get('/artists', collectionController.getAllArtists)
router.post('/artists', collectionController.createArtist);
router.post('/albums', collectionController.getAllAlbums);
router.delete('/artists/:id', collectionController.deleteArtistbyId)
module.exports = router;
