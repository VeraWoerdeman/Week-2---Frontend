const express = require('express');
const app = express();
const sql = require('mssql');

const config = {
  user: 'vera',
  password: 'nietGeheim!',
  port: 1433,
  server: 'collectionserver.database.windows.net',
  database: 'CollectionDB'
};

const pool = new sql.ConnectionPool(config);

pool.connect(err => {
  if (err) {
    console.log('Error connecting to database:', err);
  } else {
    console.log('Connected to database!');
  }
});

pool.on('error', (err) => {
  console.error('SQL Pool Error:', err);
});


app.get('/', (req, res) => { 
    res.send('Hello World!')
});

module.exports = { sql, pool }



// //GET-requests
// app.get('/artists', (req, res) => {
//   pool.request().query('SELECT * FROM artists', (err, result) => {
//     if (err) {
//       console.log('Error executing query:', err);
//       res.status(500).send('Error executing query');
//     } else {
//         const jsonResult = result.recordset.map((record) => {
//             return JSON.stringify(record) + '\n';
//           }).join('\n');
//           res.set('Content-Type', 'application/json');
//           res.send(jsonResult);
//         }
//   });
// });

// app.get('/composers', (req, res) => {
//   pool.request().query('SELECT * FROM composers', (err, result) => {
//     if (err) {
//       console.log('Error executing query:', err);
//       res.status(500).send('Error executing query');
//     } else {
//         const jsonResult = result.recordset.map((record) => {
//             return JSON.stringify(record) + '\n';
//           }).join('\n');
//           res.set('Content-Type', 'application/json');
//           res.send(jsonResult);
//         }
//   });
// });

// app.get('/albums', (req, res) => {
//   pool.request().query('SELECT * FROM albums', (err, result) => {
//     if (err) {
//       console.log('Error executing query:', err);
//       res.status(500).send('Error executing query');
//     } else {
//         const jsonResult = result.recordset.map((record) => {
//             return JSON.stringify(record) + '\n';
//           }).join('\n');
//           res.set('Content-Type', 'application/json');
//           res.send(jsonResult);
//         }
//   });
// });

// //POST-requests
// app.post('/artists', (req, res) => {
//   const { name } = req.body;
//   pool.request().input('Name', sql.NVarChar, name).query('INSERT INTO artists (Name) VALUES (@name)', (err, result) => {
//     if (err) {
//       console.log('Error executing query:', err);
//       res.status(500).send('Error executing query');
//     } else {
//       res.send(`Artist ${name} has been added to the database`);
//     }
//   });
// });

// app.post('/composers', (req, res) => {
//   const { name } = req.body;
//   pool.request().input('Name', sql.NVarChar, name).query('INSERT INTO composers (Name) VALUES (@name)', (err, result) => {
//     if (err) {
//       console.log('Error executing query:', err);
//       res.status(500).send('Error executing query');
//     } else {
//       res.send(`Composer ${name} has been added to the database`);
//     }
//   });
// });

// app.post('/albums', (req, res) => {
//   const { name } = req.body;
//   pool.request().input('Name', sql.NVarChar, name).query('INSERT INTO albums (Name) VALUES (@name)', (err, result) => {
//     if (err) {
//       console.log('Error executing query:', err);
//       res.status(500).send('Error executing query');
//     } else {
//       res.send(`Album ${name} has been added to the database`);
//     }
//   });
// });

// //DELETE-requests
// app.delete('/artists/:id', (req, res) => {
//   const artistId = req.params.id;
//   pool.request()
//     .input('id', sql.Int, artistId)
//     .query('DELETE FROM artists WHERE id = @id', (err, result) => {
//       if (err) {
//         console.log('Error deleting artist:', err);
//         res.status(500).send('Error deleting artist');
//       } else {
//         console.log('Artist deleted:', artistId);
//         res.status(204).send();
//       }
//     });
// });

// app.delete('/composers/:id', (req, res) => {
//   const composerId = req.params.id;
//   pool.request()
//     .input('id', sql.Int, artistId)
//     .query('DELETE FROM composers WHERE id = @id', (err, result) => {
//       if (err) {
//         console.log('Error deleting composer:', err);
//         res.status(500).send('Error deleting composer');
//       } else {
//         console.log('Composer deleted:', composerId);
//         res.status(204).send();
//       }
//     });
// });

// //PATCH-requests
// app.patch('/artists/:id', (req, res) => {
//   const id = req.params.id;
//   const newName = req.body.name;
//   pool.request()
//     .input('id', id)
//     .input('name', newName)
//     .query('UPDATE artists SET name = @name WHERE id = @id', (err, result) => {
//       if (err) {
//         console.log('Error executing query:', err);
//         res.status(500).send('Error executing query');
//       } else {
//         res.send(`Artist with ID ${id} has been updated with name ${newName}`);
//       }
//     });
// });

// app.patch('/composers/:id', (req, res) => {
//   const id = req.params.id;
//   const newName = req.body.name;
//   pool.request()
//     .input('id', id)
//     .input('name', newName)
//     .query('UPDATE composers SET name = @name WHERE id = @id', (err, result) => {
//       if (err) {
//         console.log('Error executing query:', err);
//         res.status(500).send('Error executing query');
//       } else {
//         res.send(`Composer with ID ${id} has been updated with name ${newName}`);
//       }
//     });
// });

// //SEARCH-request
// app.get('/artists/search', (req, res) => {
//   const searchQuery = req.query.q;
//   pool.request()
//     .input('searchQuery', `%${searchQuery}%`)
//     .query('SELECT * FROM artists WHERE name LIKE @searchQuery', (err, result) => {
//       if (err) {
//         console.log('Error executing query:', err);
//         res.status(500).send('Error executing query');
//       } else {
//         res.json(result.recordset);
//       }
//     });
// });

// app.get('/composers/search', (req, res) => {
//   const searchQuery = req.query.q;
//   pool.request()
//     .input('searchQuery', `%${searchQuery}%`)
//     .query('SELECT * FROM composers WHERE name LIKE @searchQuery', (err, result) => {
//       if (err) {
//         console.log('Error executing query:', err);
//         res.status(500).send('Error executing query');
//       } else {
//         res.json(result.recordset);
//       }
//     });
// });

// // const port = 3010;
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });
