//---------From Raymond server.js---------
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var Scraper = require("image-scraper");

//---------Cynthia's Code---------------
var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

//-------Code that runs through relative links-------
var START_URL = "https://www.billboard.com/";
var SEARCH_WORD = "stemming";
var MAX_PAGES_TO_VISIT = 5;
var pagesVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];
var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;

//-------Eric's code for Clarifai----------------

const Clarifai = require('clarifai');
const appClarifai = new Clarifai.App({
  apiKey: '1fb691efd3a74e3cb297b8d3577a6d37'
 });
 
var urls = ["http://static5.uk.businessinsider.com/image/58c29a46e21a9a28008b47b4-1190-625/the-9-youngest-self-made-female-billionaires-in-the-world.jpg", "https://samples.clarifai.com/demographics.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dwight_Howard_30483967610.jpg/1200px-Dwight_Howard_30483967610.jpg"];
// var urls = [];

var gender = [];
var male = 0;
var female = 0;
var white = 0;
var black = 0;
var hispanic = 0;
var asian = 0;
var PI = 0;
var ME = 0;
var AI = 0;
var race = [];
var age = [];
var U21 = 0;
var U34 = 0;
var U44 = 0;
var U54 = 0;
var U64 = 0;
var old = 0;


//----------start of clarifai.js code---------
function runClarifai(urls)
{
  for(x in urls)
  {
      appClarifai.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", urls[x]).then(
        function(response) {
          for (i in response.outputs[0].data.regions) {
              x = response.outputs[0].data.regions[i].data.face.gender_appearance.concepts;
              if(x[0].name === "masculine")
            {
                  gender[i] = "Male";
                  male += 1;
            }
            else
            {
                  gender[i] = "Female";
              female += 1;
              }
          //------------race------------- 
        y = response.outputs[0].data.regions[i].data.face.multicultural_appearance.concepts[0].name;
        race.push(y);
        if(y === "white")
        {
          white += 1;
        }
        else if(y === "black or african american")
        {
          black += 1;
        }
        else if(y === "american indian or alaska native")
        {
          AI += 1;
        }
        else if(y === "middle eastern or north african")
        {
          ME += 1;
        }
        else if(y === "hispanic, latino, or spanish origin")
        {
          hispanic += 1;
        }
        else if(y === "native hawaiian or pacific islander")
        {
          PI += 1;
        }
        else if(y === "asian")
        {
          asian += 1;
        }
  
        //------------age-------------
        z = response.outputs[0].data.regions[i].data.face.age_appearance.concepts[0].name;
        age.push(z);
          var a = Number(z);
        if(a <= 21)
        {
          U21 += 1;
        }
        else if( a >= 22 && a <= 34)
        {
          U34 += 1;
        }
        else if( a >= 35 && a <= 44)
        {
          U44 += 1;
        }
        else if( a >= 45 && a <= 54)
        {
          U54 += 1;
        }
        else if( a >= 55 && a <= 64)
        {
          U64 += 1;
        }
        else if( a >= 65)
        {
          old += 1;
        }
      }
      //------------gender-----------
      var malePercent = (male * 100) / (male + female);
      console.log("Male: " + malePercent + "%");
  
      var femalePercent = (female * 100) / (male + female);
      console.log("Female: " + femalePercent + "%");
  
      //-----------race--------------
      console.log("White: " + (white * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
      console.log("Black: " + (black * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
      console.log("Asian: " + (asian * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
      console.log("Hispanic: " + (hispanic * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
      console.log("American Indian: " + (AI * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
      console.log("Pacific Islander: " + (PI * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
      console.log("Middle Eastern: " + (ME * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
  
      //-----------age---------------
      console.log("21 and Under: " + (U21 * 100) / (U21 + U34 + U44 + U54 + U64 + old) + "%");
      console.log("22 - 34: " + (U34 * 100) / (U21 + U34 + U44 + U54 + U64 + old) + "%");
      console.log("35 - 44: " + (U44 * 100) / (U21 + U34 + U44 + U54 + U64 + old) + "%");
      console.log("45 - 54: " + (U54 * 100) / (U21 + U34 + U44 + U54 + U64 + old) + "%");
      console.log("55 - 64: " + (U64 * 100) / (U21 + U34 + U44 + U54 + U64 + old) + "%");
      console.log("65+ : " + (old * 100) / (U21 + U34 + U44 + U54 + U64 + old) + "%");
      },
  
      function(err) {
          console.error(err);
      }
      );
  }
  
}

//----------end of clarifair.js code----------


pagesToVisit.push(START_URL);
crawl();

//-----Raymond's server.js code put into a function------
function loadURL(nextPage)
{
    if(!nextPage)
    {
        console.log("nextPag is null!")
    }
    else
    {
        app.use(bodyParser.json());

        app.use('/', express.static(path.join(__dirname, 'dist')));
    
        app.all('/*', function(req, res) {
            res.sendFile(path.join(__dirname, 'dist/index.html'));
        });
    
        console.log("in loadURL the next page is " + nextPage);
        var scraper = new Scraper(nextPage);
    
    
        scraper.scrape(function(image){
            console.log("\n the image address is " + image.address + "\n");
            
            runClarifai(image.address);
        })
        
        app.listen(8080, () => console.log('listening'))
    }
    
};
//----------end of server.js code-------

pagesToVisit.push(START_URL);
crawl();

function crawl() {
    if(numPagesVisited >= MAX_PAGES_TO_VISIT) {
      console.log("Reached max limit of number of pages to visit.");
      return;
    }

    var nextPage = pagesToVisit.pop();
    
    console.log("the next page is " + nextPage);
    if (!nextPage) {
        // We're done!
        console.log('Crawl complete!');
    } 
    else if (nextPage in pagesVisited) {
      // We've already visited this page, so repeat the crawl
      crawl();
    } else {
      // New page we haven't visited
    //   loadURL(nextPage);
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