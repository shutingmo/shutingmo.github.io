const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
var Scraper = require("image-scraper");
//body parsing middleware
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'dist')));

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var scraper = new Scraper("https://apod.nasa.gov/apod/astropix.html");

scraper.address = "https://www.microsoft.com/en-us/";

scraper.scrape(function(image){
  console.log(image.address);
})


app.listen(8080, () => console.log('listening'))
