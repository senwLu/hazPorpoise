const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'hazPorpoise',
  port: '3306',
  user: 'root'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to the db');
  }
})

module.exports = connection;