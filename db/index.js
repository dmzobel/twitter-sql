const pg = require('pg');
const postgresUrl = 'postgres://localhost/twitterdb';

// database setup
const client = new pg.Client({
  database: 'twitterdb'
});

client.connect();

// client.query('SELECT $1:: text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) // Hello World!
//   client.end()
// });

module.exports = client;
