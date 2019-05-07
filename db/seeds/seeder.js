let { data } = require('./seedData.js');
var db = require('./../index.js');

const postProductSeed = function (data) {
  for(let i=0; i < data.length; i++) {

    const newSeed = {
      id: data[i].id,
      storeAddress: data[i].storeAddress,
      timeDate: data[i].timeDate,
      didSellOut: data[i].didSellOut,
      sellOutDate: data[i].sellOutDate,
      sellOutTime: data[i].sellOutTime

    }

    const queryString = 'INSERT INTO storeData (id, storeAddress, timeDate, didSellOut, sellOutDate, sellOutTime) ' + 
                        'VALUES (?, ?, ?, ?, ?, ?)'

    db.query(queryString, [newSeed.id, newSeed.storeAddress, newSeed.timeDate, newSeed.didSellOut, newSeed.sellOutDate, newSeed.sellOutTime])
   
  }
}

postProductSeed(data);
