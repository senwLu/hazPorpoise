const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/hazPorpoise_Qs');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/allSoldOutData', (req, res) => {
    db.getAllSoldOut((err, rows) => {
      if(err) return res.status.send(err)
      res.send(rows)
    })
  })


let port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port: ${port}`));