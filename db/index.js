const dotenv = require('dotenv');
dotenv.load();

var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/vicar';
var db = pgp(connectionString);

module.exports = db;
  