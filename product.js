let request = require('request');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let apiKey = '959e0a3d2112c726b8d3f0f664a8df92';
let pass = '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';
let endpoint = 'products';

let options = {
  'method': 'GET',
  'url': `https://c4d995-3.myshopify.com/admin/api/2023-10/${endpoint}.json`,
  'headers': {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': pass
  }
}

app.get('/getdata', (req, res) => {
  request(options, function (error, response) {
    if (error) {
      throw new Error(error);
    }

    res.send(response.body);

    console.log(response.body);
  })
})

app.listen(3400);