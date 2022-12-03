const express = require('express');
const db = require('../db/db.js');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/reviews/:product_id', async (req, res) => {

})
app.get('/reviews/meta/:product_id', async (req, res) => {

} )
app.post('/addReview', async (req, res) => {

})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});