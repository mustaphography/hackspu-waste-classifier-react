//import fetch from 'node-fetch';
import {readFileSync} from 'fs';


//returns formatted ai analysis data
export default function processor(image) {
//get image object from camera

const {uri} = image;

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
  return data
  //console.log(JSON.stringify(data, null, 2));
}).catch((error) =>
{
  return error
  console.log(error);
});

  //turn object into correct format

  //request to ai model

  //return and format result
}