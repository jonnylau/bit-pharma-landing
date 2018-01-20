var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

//var save = require('../database-mongo/index.js').save;

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

//----------------------------------------------------------------------------------------
app.listen(3000, function () {
  console.log('listening on port 3000!');
});




