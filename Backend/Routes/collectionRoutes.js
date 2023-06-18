const collectionController = require('../Controllers/collectionController');
const express = require('express');
const router = express.Router();

router.get('/artists', collectionController.getAllArtists);
router.get('/albums', collectionController.getAllAlbums);
router.get('/composers', collectionController.getAllComposers); 

router.get('/albums/:id', collectionController.getAlbumById);
router.get('/artists/:id', collectionController.getArtistById);
router.get('/composers/:id', collectionController.getComposerById);

router.post('/albums', collectionController.createAlbum);
router.post('/artists', collectionController.createArtist);
router.post('/composers', collectionController.createComposer);

router.put('/album/:id', collectionController.updateAlbum);
router.put('/artist/:id', collectionController.updateArtist);

router.delete('/album/:id', collectionController.deleteAlbum);
router.delete('/artist/:id', collectionController.deleteArtist);
router.delete('/composers/:id', collectionController.deleteComposer);
router.put('/composers/:id', collectionController.updateComposer);

module.exports = router;

const pool = require('../db.js');

exports.getAllArtists = (req, res) => {
  pool.request().query('SELECT * FROM artists', (err, result) => {
    if (err) {
      console.log('Error executing query:', err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result.recordset);
    }
  });
  res.send('Get all artists');
};

