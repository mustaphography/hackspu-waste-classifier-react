const express = require('express')
const app = express()
const port = 4000
const {readFileSync} = require('fs');

app.get('/', (req, res) => {

const {uri} = req.body.image;

//replace with env var soon
let endpoint = 'https://wasteless.onrender.com/';
let filePath = uri;

//code below is what you are looking for 
const base64 =  readFileSync(filePath, 'base64') 
const data = Buffer.from(base64, 'base64')

var uriBase = endpoint + "predict";

fetch(uriBase + "?" + {
    "language": "unk",
    "detectOrientation": "true",
},
{
method: 'POST',
headers: 
    {
    'Content-Type': 'application/octet-stream',
    },
body: data,
}).then((response) => response.json()).then((data) =>
{
  res.json(data);
  //console.log(JSON.stringify(data, null, 2));
}).catch((error) =>
{
  res.json(data);
  console.log(error);
});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})