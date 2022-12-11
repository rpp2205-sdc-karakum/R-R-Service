const express = require('express');
const db = require('../db/db.js');
const app = express();


// app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/reviews/:product_id', async (req, res) => {
  db.reviewID(req.params.product_id)
    .then((Data)=>{
      console.log(Data[0], ' DATA');
      res.status(201).send(Data[0])
    })
    .catch((err)=> {
      res.sendStatus(501)
    })

})
app.get('/reviews/meta/:product_id', async (req, res) => {
  db.meta(req.params.product_id)
    .then((data)=> {
      console.log(data[0])
      res.status(201).send(data[0])
    })
} )
app.post('/addReview', async (req, res) => {
  console.log('add', req);
  return res.sendStatus(500)

})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});