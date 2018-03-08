const { Client } = require('pg');

// database setup
const client = new Client({
  host: 'my.database-server.com',
  port: 5334
});

client.connect();

client.query('SELECT $1:: text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
});

module.exports(client);
