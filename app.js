require('dotenv').config()
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
    bgColor: process.env.BG_COLOR,
    bgImage: process.env.BG_IMAGE,
  });
});

app.listen(8080);