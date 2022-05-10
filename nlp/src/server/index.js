var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

//*
const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))
//use data in dist file

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
//initilizing app


// declare variable for API key

var projectData = {};
const data=[];

const apiKey = process.env.API_KEY;


projectData.data=apiKey;

app.get('/data', push);

function push(req,res) {

  res.send(projectData);

  //send to the client side

}
