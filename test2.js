const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var Scraper = require("image-scraper");


var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var START_URL = "https://www.billboard.com/";
var SEARCH_WORD = "stemming";
var MAX_PAGES_TO_VISIT = 5;

var pagesVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];
var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;


//----------start of server.js code--------------
// app.use(bodyParser.json());

// app.use('/', express.static(path.join(__dirname, 'dist')));

// app.all('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
// var scraper = new Scraper("https://www.microsoft.com/en-us/");


// scraper.scrape(function(image){
//     console.log(image.address);
//   })
  
  
// app.listen(8080, () => console.log('listening'))

//----------end of server.js code--------------



pagesToVisit.push(START_URL);
crawl();

function loadURL(nextPage)
{
    console.log("inside loadURL, next page value is " + nextPage);

    app.use(bodyParser.json());

    app.use('/', express.static(path.join(__dirname, 'dist')));

    app.all('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });

    console.log("in loadURL the next page is " + nextPage);
    var scraper = new Scraper(nextPage);


    scraper.scrape(function(image){
        console.log("\n the image address is " + image.address + "\n");
        
    })
    
    app.listen(8080, () => console.log('listening'))
}

function crawl() {
    if(numPagesVisited >= MAX_PAGES_TO_VISIT) {
      console.log("Reached max limit of number of pages to visit.");
      return;
    }

    // console.log("\npages to visit");
    // console.log(pagesToVisit);
    // console.log("\n");

    var nextPage = pagesToVisit.pop();
    
    console.log("the next page is " + nextPage);

    
    loadURL(nextPage);

    if (nextPage in pagesVisited) {
      // We've already visited this page, so repeat the crawl
      crawl();
    } else {
      // New page we haven't visited
      visitPage(nextPage, crawl);
    }
  }
  
  function visitPage(url, callback) {
    // Add page to our set
    pagesVisited[url] = true;
    numPagesVisited++;
  
    // Make the request
    console.log("Visiting page " + url);
    request(url, function(error, response, body) {
       // Check status code (200 is HTTP OK)
       console.log("Status code: " + response.statusCode);
       if(response.statusCode !== 200) {
         callback();
         return;
       }
       // Parse the document body
       var $ = cheerio.load(body);
       var isWordFound = searchForWord($, SEARCH_WORD);
       if(isWordFound) {
         console.log('Word ' + SEARCH_WORD + ' found at page ' + url);
       } else {
         collectInternalLinks($);
         // In this short program, our callback is just calling crawl()
         callback();
       }
    });
  }

  function searchForWord($, word) {
    var bodyText = $('html > body').text().toLowerCase();
    return(bodyText.indexOf(word.toLowerCase()) !== -1);
  }
  
  function collectInternalLinks($) {
      var relativeLinks = $("a[href^='/']");
      console.log("Found " + relativeLinks.length + " relative links on page");
      relativeLinks.each(function() {
          pagesToVisit.push(baseUrl + $(this).attr('href'));
      });
  }