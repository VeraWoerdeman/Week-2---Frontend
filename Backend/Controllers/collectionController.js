const { application } = require('express');
const db = require('../db.js');

exports.getAllArtists = (req, res) => {
    const query = 'SELECT * FROM Artists'; 
    db.pool.request().query(query, (err, result) => {
      if (err) { 
        console.log('Error executing query:', err);
        res.status(500).send('Error executing query');
      } else {
        const jsonResult = result.recordset.map((record) => {
            return JSON.stringify(record) + '\n';
          }).join('\n');
          res.set('Content-Type', 'application/json');
          res.send(jsonResult);
        }
    });
  };

  exports.getAllAlbums = (req, res) => {
    const query = 'SELECT * FROM Albums'; 
    db.pool.request().query(query, (err, result) => {
      if (err) { 
        console.log('Error executing query:', err);
        res.status(500).send('Error executing query');
      } else {
        const jsonResult = result.recordset.map((record) => {
            return JSON.stringify(record) + '\n';
          }).join('\n');
          res.set('Content-Type', 'application/json');
          res.send(jsonResult);
        }
    });
  };

exports.getArtistById = (req, res) => { 
    const query = 'Select * from Artists where id = ?'
    db.pool.request().query(query, (err, result) => {
        if (err) { 
          console.log('Error executing query:', err);
          res.status(500).send('Error executing query');
        } else {
          const jsonResult = result.recordset.map((record) => {
              return JSON.stringify(record) + '\n';
            }).join('\n');
            res.set('Content-Type', 'application/json');
            res.send(jsonResult);
          }
      });
    };

exports.createArtist = (req, res) => { 
    const query  = 'INSERT INTO artists (Name) VALUES (@name)'
        const { name } = req.body;
        db.pool.request().query(query, (Err, result) => {
          if (err) {
            console.log('Error executing query:', err);
            res.status(500).send('Error executing query');
          } else {
            const jsonResult = result.recordset.map((record) => {
                return JSON.stringify(record) + '\n';
              }).join('\n');
              res.set('Content-Type', 'application/json');
              res.send(jsonResult);
            res.send(`Artist ${name} has been added to the database`);
          }
        });
      };

exports.deleteArtistById('/artists/:id', (req, res) => {
    const artistId = req.params.id;
    const query = 'DELETE FROM artists WHERE id = @id'
    db.pool.request()
      .input('id', sql.Int, artistId)
      .query('DELETE FROM artists WHERE id = @id', (err, result) => {
        if (err) {
          console.log('Error deleting artist:', err);
          res.status(500).send('Error deleting artist');
        } else {
          console.log('Artist deleted:', artistId);
          res.status(204).send();
        }
      });
  });

