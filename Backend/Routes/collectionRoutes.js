const { Router } = require('express');
const express = require('express');
const collectionController = require ('./Controllers/collectionController.js')
const router = express.Router(); 

router.get('/', collectionController.getAllAlbums);
router.get('/artists', collectionController.getAllArtists)

module.exports = router;
