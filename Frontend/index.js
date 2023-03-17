const express = require('express');
const bodyParser = require('body-parser');
const mssql = require('mssql');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MSSQL Configuration
const config = {
  user: 'dbo',
  password: '<db_password>',
  server: '<db_server>',
  database: '<db_name>',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// API Endpoints
app.get('/api/artists', (req, res) => {
  mssql.connect(config, (err) => {
    if (err) throw err;

    const query = 'SELECT * FROM Artists';

    new mssql.Request().query(query, (err, result) => {
      if (err) throw err;

      res.send(result.recordset);
    });
  });
});

app.post('/api/data', (req, res) => {
  const { field1, field2, field3 } = req.body;

  mssql.connect(config, (err) => {
    if (err) throw err;

    const query = `INSERT INTO <table_name> (field1, field2, field3) VALUES ('${field1}', '${field2}', '${field3}')`;

    new mssql.Request().query(query, (err, result) => {
      if (err) throw err;

      res.send(`Data added successfully.`);
    });
  });
});

app.put('/api/data/:id', (req, res) => {
  const { id } = req.params;
  const { field1, field2, field3 } = req.body;

  mssql.connect(config, (err) => {
    if (err) throw err;

    const query = `UPDATE <table_name> SET field1='${field1}', field2='${field2}', field3='${field3}' WHERE id=${id}`;

    new mssql.Request().query(query, (err, result) => {
      if (err) throw err;

      res.send(`Data updated successfully.`);
    });
  });
});

app.delete('/api/data/:id', (req, res) => {
  const { id } = req.params;

  mssql.connect(config, (err) => {
    if (err) throw err;

    const query = `DELETE FROM <table_name> WHERE id=${id}`;

    new mssql.Request().query(query, (err, result) => {
      if (err) throw err;

      res.send(`Data deleted successfully.`);
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
