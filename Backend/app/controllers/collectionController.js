const db = require('../../db.js');

//get all artists
exports.getAllArtists = (req, res) => {
    const query = 'SELECT * FROM Artists'; 
    db.poolPromise.then(pool => {
      return pool.query(query);
    }).then(result => {
      const jsonResult = result.recordset.map((record) => {
        return JSON.stringify(record) + '\n';
      }).join('\n');
      res.set('Content-Type', 'application/json');
      res.send(jsonResult);
    }).catch(err => {
      console.log('Error executing query:', err);
      res.status(500).send('Error executing query');
    });
  };

//get all albums
exports.getAllAlbums = (req, res) => {
  const query = 'SELECT * FROM Albums'; 
  db.poolPromise.then(pool => {
    return pool.query(query);
  }).then(result => {
    const jsonResult = result.recordset.map((record) => {
      return JSON.stringify(record) + '\n';
    }).join('\n');
    res.set('Content-Type', 'application/json');
    res.send(jsonResult);
  }).catch(err => {
    console.log('Error executing query:', err);
    res.status(500).send('Error executing query');
  });
};


//get artist by id
exports.getArtistById = (req, res) => {
  const query = 'SELECT * FROM Artists WHERE ArtistId = @id';
  const { id } = req.params;
  db.poolPromise.then(pool => {
    return pool.query(query, { id });
  }).then(result => {
    const jsonResult = result.recordset.map((record) => {
      return JSON.stringify(record) + '\n';
    }).join('\n');
    res.set('Content-Type', 'application/json');
    res.send(jsonResult);
  }).catch(err => {
    console.log('Error executing query:', err);
    res.status(500).send('Error executing query');
  });
};


//get album by id
exports.getAlbumById = (req, res) => {
  const query = 'SELECT * FROM Albums WHERE AlbumId = @id';
  const { id } = req.params;
  db.pool.request().input('id', id).query(query, (err, result) => {
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
  const query = 'INSERT INTO artists (Name) VALUES (@name)';
  const { name } = req.body;
  db.poolPromise.then(pool => {
    return pool.query(query, { name });
  }).then(result => {
    const jsonResult = result.recordset.map((record) => {
      return JSON.stringify(record) + '\n';
    }).join('\n');
    res.set('Content-Type', 'application/json');
    res.send(jsonResult);
    res.send(`Artist ${name} has been added to the database`);
  }).catch(err => {
    console.log('Error executing query:', err);
    res.status(500).send('Error executing query');
  });
};

      
//create album
exports.createAlbum = (req, res) => { 
  const query  = 'INSERT INTO Albums (Name) VALUES (@name)'
      const { name } = req.body;
      db.pool.request().input('name', name).query(query, (err, result) => {
        if (err) {
          console.log('Error executing query:', err);
          res.status(500).send('Error executing query');
        } else {
          const jsonResult = result.recordset.map((record) => {
              return JSON.stringify(record) + '\n';
            }).join('\n');
            res.set('Content-Type', 'application/json');
            res.send(jsonResult);
          res.send(`Albums ${name} has been added to the database`);
        }
      });
    };

//delete artist by id
exports.deleteArtist = (req, res) => {
  const query = 'DELETE FROM Artists WHERE id = ?';
  const { id } = req.params;
  db.poolPromise.then(pool => {
    return pool.query(query, { id });
  }).then(result => {
    const jsonResult = result.recordset.map((record) => {
      return JSON.stringify(record) + '\n';
    }).join('\n');
    res.set('Content-Type', 'application/json');
    res.send(jsonResult);
    res.send(`Artist with id ${id} has been deleted from the database`);
  }).catch(err => {
    console.log('Error executing query:', err);
    res.status(500).send('Error executing query');
  });
};


//delete album by id
exports.deleteAlbum = (req, res) => {
  const query = 'DELETE FROM Albums WHERE id = ?'
  const { id } = req.params;
  db.pool.request().input('id', id).query(query, (err, result) => {
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
  db.pool.request().input('id', id, 'name', name).query(query, (err, result) => {
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
