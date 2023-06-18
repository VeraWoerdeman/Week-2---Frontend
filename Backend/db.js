const sql = require('mssql');

const config = {
  user: 'vera',
  password: 'nietGeheim!',
  port: 1433,
  server: 'collectionserver.database.windows.net',
  database: 'CollectionDB'
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to the database!');
    return pool;
  })
  .catch(err => {
    console.log('Database Connection Failed! ', err);
    throw err;
  });

module.exports = {
  poolPromise
};
