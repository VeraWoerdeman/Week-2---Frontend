const db = require('../db.js');

//get all artists
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

  //get all albums
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

//get artist by id
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

//create artist
exports.createArtist = (req, res) => { 
    const query  = 'INSERT INTO artists (Name) VALUES (@name)'
        const { name } = req.body;
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
            res.send(`Artist ${name} has been added to the database`);
          }
        });
      };
      
//delete artist by id
exports.deleteArtist = (req, res) => {
  const query = 'DELETE FROM Artists WHERE id = ?'  
  const { id } = req.params;
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
        res.send(`Artist with id ${id} has been deleted from the database`);
      }
  }
  );
};

//delete album by id
exports.deleteAlbum = (req, res) => {
  const query = 'DELETE FROM Albums WHERE id = ?'
  const { id } = req.params;
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
        res.send(`Album with ${id} has been deleted from the database`);
      }
  }
  );
};

//update artist by id
exports.updateArtist = (req, res) => {
  const query = 'UPDATE Artists SET Name = ? WHERE id = ?'
  const { id } = req.params;
  const { name } = req.body;
  db.pool.request().query(query, (err, result) => {
    if (err) { 
      console.log('Error executing query:', err);
      res.status(500).send('Error executing query');
    } else {
      const jsonResult = result.recordset.map((record) => {
          return JSON.stringify(record) + '\n';
        }
        ).join('\n');
        res.set('Content-Type', 'application/json');
        res.send(jsonResult);
        res.send(`Artist with id ${id} has been updated`);
      }
  }
  );
};

//update album by id
exports.updateAlbum = (req, res) => {
  const query = 'UPDATE Albums SET Title = ?, ArtistId = ?, ComposerId = ? WHERE id = ?'
  const { id } = req.params;
  const { title, artistId, composerId } = req.body;
  db.pool.request().query(query, (err, result) => {
    if (err) { 
      console.log('Error executing query:', err);
      res.status(500).send('Error executing query');
    } else {
      const jsonResult = result.recordset.map((record) => {
          return JSON.stringify(record) + '\n';
        }
        ).join('\n');
        res.set('Content-Type', 'application/json');
        res.send(jsonResult);
        res.send(`Album with id ${id} has been updated`);
      }
  }
  );
};
