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

module.exports = pool;
