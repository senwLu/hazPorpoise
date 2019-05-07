var db = require('./index.js');

module.exports.getAllSoldOut= function (callback) {
  db.query('SELECT * FROM storeData WHERE didSellOut = true;', (err, rows, fields) => {
    if(err) return callback(err)
    callback(null, rows)
  })
}