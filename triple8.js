//---------From Raymond server.js---------
const express = require('express');
const app = express();
var path = require('path');
const bodyParser = require('body-parser');
var Scraper = require("image-scraper");

var getImageUrls = require('get-image-urls');

//---------Cynthia's Code---------------
var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

//-------Code that runs through relative links-------
var START_URL = "http://dazedimg.dazedgroup.netdna-cdn.com/900/azure/dazed-prod/1230/8/1238442.jpg";
var SEARCH_WORD = "stemming";
var MAX_PAGES_TO_VISIT = 5;
var pagesVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];
var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;
var pagesToPass = [];

//-------Eric's code for Clarifai----------------

const Clarifai = require('clarifai');
const math = require('mathjs')

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
//might need to change urls parameter, maybe doesn't know it's an array

function runClarifai(urls)
{
    urls = [];
    urls = ["http://static5.uk.businessinsider.com/image/58c29a46e21a9a28008b47b4-1190-625/the-9-youngest-self-made-female-billionaires-in-the-world.jpg", "https://samples.clarifai.com/demographics.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dwight_Howard_30483967610.jpg/1200px-Dwight_Howard_30483967610.jpg"];

    var urlsLength = urls.length;

    console.log("url length is " + urlsLength);
    if(urls === undefined)
    {
        console.log("empty urls array")
        return;
    }

    async function gender(urls)
    {
        try
        {
            var gender = [];
            var male = 0;
            var female = 0;
            for(var w = 0; w < urls.length;  w ++)
            {
                console.log("insdie for loop");
            
                
                    const response = await app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", urls[w]);
                    if(err)
                    {

                    
                        console.log("err with predict " + err);
                    }
                    else
                    {
                        console.log('in try')
                        for (i in response.outputs[0].data.regions)
                        {
                            x = response.outputs[0].data.regions[i].data.face.gender_appearance.concepts;
                            if(x[0].name === "masculine")
                            {
                                gender.push["Male"];
                                male += 1;
                            }
                            else
                            {
                                gender.push["Female"];
                                female += 1;
                            }
                        }
                    }
                   
                
                
                
            }
            
            var malePercent = (male * 100) / (male + female + w - w);
            console.log("Male: " + malePercent + "%");
            var femalePercent = (female * 100) / (male + female);
            console.log("Female: " + femalePercent + "%");
            var diff = Math.abs(malePercent - femalePercent);
            var genderScore = (1 - (diff / 100)) * 100;
            console.log("Gender Score: " + genderScore);
        }
        catch(err)
        {
            console.log("erorr" + err)
        }
    }

//     async function race(urls)
//     {
//     var white = 0;
//     var black = 0;
//     var hispanic = 0;
//     var asian = 0;
//     var PI = 0;
//     var ME = 0;
//     var AI = 0;
//     var race = [];
//     for(var w = 0; w < urls.length;  w ++)
//     {
//         const response = await app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", urls[w]);
//         for (i in response.outputs[0].data.regions)
//         {
//             y = response.outputs[0].data.regions[i].data.face.multicultural_appearance.concepts[0].name;
//             race.push(y);
//             if(y === "white")
//             {
//                 white += 1;
//             }
//             else if(y === "black or african american")
//             {
//                 black += 1;
//             }
//             else if(y === "american indian or alaska native")
//             {
//                 AI += 1;
//             }
//             else if(y === "middle eastern or north african")
//             {
//                 ME += 1;
//             }
//             else if(y === "hispanic, latino, or spanish origin")
//             {
//                 hispanic += 1;
//             }
//             else if(y === "native hawaiian or pacific islander")
//             {
//                 PI += 1;
//             }
//             else if(y === "asian")
//             {
//                 asian += 1;
//             }
//         }

//     }

//     var whitePercent = (white * 100) / (white + asian + black + hispanic + PI + AI + ME);
//   	console.log("White: " + whitePercent + "%");
//   	var blackPercent = (black * 100) / (white + asian + black + hispanic + PI + AI + ME);
//   	console.log("Black: " + blackPercent + "%");
//   	var asianPercent = (asian * 100) / (white + asian + black + hispanic + PI + AI + ME);
//   	console.log("Asian: " + asianPercent + "%");
//   	var hispanicPercent = (hispanic * 100) / (white + asian + black + hispanic + PI + AI + ME);
//   	console.log("Hispanic: " + hispanicPercent + "%");
//   	var AIPercent = (AI * 100) / (white + asian + black + hispanic + PI + AI + ME);
//   	console.log("American Indian: " + AIPercent + "%");
//   	var PIPercent = (PI * 100) / (white + asian + black + hispanic + PI + AI + ME);
//   	console.log("Pacific Islander: " + PIPercent + "%");
//   	var MEPercent =  (ME * 100) / (white + asian + black + hispanic + PI + AI + ME);
//   	console.log("Middle Eastern: " + MEPercent + "%");
//   	var std = math.std(whitePercent, blackPercent, asianPercent, hispanicPercent, AIPercent, PIPercent, MEPercent);
//   	var raceScore = ((37.8 - std) / 34.3604) * 100;
//   	if(raceScore > 100)
//   	{
//   		raceScore = 100;
//   	}
//     raceScore = math.floor((raceScore * 100) / 100);
//   	console.log("Race Score: " + raceScore);
// }

// async function age(urls)
// {
//     var age = [];
//     var U21 = 0;
//     var U34 = 0;
//     var U44 = 0;
//     var U54 = 0;
//     var U64 = 0;
//     var old = 0;
//     for(var w in urls)
//     {
//         const response = await app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", urls[w]);
//         for (i in response.outputs[0].data.regions)
//         {
//             var z = response.outputs[0].data.regions[i].data.face.age_appearance.concepts[0].name;
//       	    age.push(z);
//       	    var a = Number(z);
//       	    if(a <= 21)
//       	    {
//       		      U21 += 1;
//       	    }
//       	    else if( a >= 22 && a <= 34)
//       	    {
//       		      U34 += 1;
//       	    }
//       	    else if( a >= 35 && a <= 44)
//       	    {
//       		      U44 += 1;
//       	    }
//       	    else if( a >= 45 && a <= 54)
//       	    {
//       		      U54 += 1;
//       	    }
//       	    else if( a >= 55 && a <= 64)
//       	    {
//       		      U64 += 1;
//       	    }
//       	    else if( a >= 65)
//       	    {
//       		      old += 1;
//       	    }
//         }
//     }
//     var U21p = (U21 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
//   	console.log("21 and Under: " + U21p + "%");
//     var U34p = (U34 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
//   	console.log("22 - 34: " + U34p + "%");
//     var U44p = (U44 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
//   	console.log("35 - 44: " + U44p + "%");
//     var U54p = (U54 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
//   	console.log("45 - 54: " + U54p + "%");
//     var U64p = (U64 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
//   	console.log("55 - 64: " + U64p + "%");
//     var oldp = (old * 100) / (U21 + U34 + U44 + U54 + U64 + old);
//   	console.log("65+ : " + oldp + "%");
//   	std = math.std(U21p, U34p, U44p, U54p, U64p, oldp);
//   	var ageScore = ((40.9 - std) / 34.3604) * 100;
//   	if(ageScore > 100)
//   	{
//   		  ageScore = 100;
//   	}
//     ageScore = math.floor((ageScore * 100) / 100);
//   	console.log("Age Score: " + ageScore);
// }

gender(urls)
// race(urls)
// age(urls)

    
  
}

//----------end of clarifair.js code----------


//-----Raymond's server.js code put into a function------
loadURL(START_URL);

function loadURL(START_URL)
{
    // console.log("in loadURL pages passed in are " + JSON.stringify(arrayPagesToPass));

    // var arrayPagesToPassLength = arrayPagesToPass.length;
    // console.log("in load url, the array length is " + arrayPagesToPassLength);

    // for(var i = 0; i < 2; i++)
    // {
    //     console.log(arrayPagesToPass[i]);

    //     console.log("\nin loadURL the next page is " + arrayPagesToPass[i]);
    //     // var scraper = new Scraper(arrayPagesToPass[i]);

    //     getImageUrls(arrayPagesToPass[i])
    //     .then(function(images) {
    //     console.log('Images found', images.length);

    //     // for(var index = 0; index < 5; index++)
    //     // {
    //     //     // console.log(images[index].url);
    //     //     urls.push(images[index].url);
    //     // }

    //     // console.log("\n urls array has " + JSON.stringify(urls));
        
    //     urls = ["http://static5.uk.businessinsider.com/image/58c29a46e21a9a28008b47b4-1190-625/the-9-youngest-self-made-female-billionaires-in-the-world.jpg", "https://samples.clarifai.com/demographics.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dwight_Howard_30483967610.jpg/1200px-Dwight_Howard_30483967610.jpg"];

    //     runClarifai(urls);

    //     })
    //     .catch(function(e) {
    //     // console.log('ERROR', e);
    //         throw(e);
    //     })
    // }

    getImageUrls(START_URL)
    .then(function(images) {
    console.log('Images found', images.length);

    for(var index = 0; index < images.length; index++)
    {
        console.log(images[index].url);
        //urls.push(images[index].url);
    }

    runClarifai(urls)
    })
    .catch(function(e) {
    console.log('ERROR', e);
    })


};
//----------end of server.js code-------

// pagesToVisit.push(START_URL);
// crawl();

// function crawl() {
//     if(numPagesVisited >= MAX_PAGES_TO_VISIT) {
//       console.log("Reached max limit of number of pages to visit.");

//       console.log("\nin crawl pages passed in are " + JSON.stringify(pagesToPass));
//       loadURL(pagesToPass);
//       return;
//     }

//     var nextPage = pagesToVisit.pop();
    
//     console.log("the next page is " + nextPage);
//     if (!nextPage) {
//         // We're done!
//         console.log('Crawl complete!');
//     } 
//     else if (nextPage in pagesVisited) {
//       // We've already visited this page, so repeat the crawl
      
//     //   console.log("pages visited are " + JSON.stringify(pagesVisited));

//       crawl();
//     } else {
//       // New page we haven't visited
//     //   loadURL(nextPage);
//       visitPage(nextPage, crawl);
//     }
//   }
  
//   function visitPage(url, callback) {
//     // // Add page to our set
//     // pagesVisited[url] = true;
//     // numPagesVisited++;
  
//     // Make the request
//     console.log("\nnumber of pages visited is " + numPagesVisited);

//     console.log("Visiting page " + url);

//     pagesToPass[numPagesVisited] = url;
//     console.log("pages to pass are " + JSON.stringify(pagesToPass));

//     // Add page to our set
//     pagesVisited[url] = true;
//     numPagesVisited++;


//     console.log("pages visited are " + JSON.stringify(pagesVisited));


//     request(url, function(error, response, body) {
//        // Check status code (200 is HTTP OK)
//        console.log("Status code: " + response.statusCode);
//        if(response.statusCode !== 200) {
//          callback();
//          return;
//        }
//        // Parse the document body
//        var $ = cheerio.load(body);
//        var isWordFound = searchForWord($, SEARCH_WORD);
//        if(isWordFound) {
//          console.log('Word ' + SEARCH_WORD + ' found at page ' + url);
//        } else {
//          collectInternalLinks($);
//          // In this short program, our callback is just calling crawl()
//          callback();
//        }
//     });
//   }

//   function searchForWord($, word) {
//     var bodyText = $('html > body').text().toLowerCase();
//     return(bodyText.indexOf(word.toLowerCase()) !== -1);
//   }
  
//   function collectInternalLinks($) {
//       var relativeLinks = $("a[href^='/']");
//       console.log("Found " + relativeLinks.length + " relative links on page");
//       relativeLinks.each(function() {
//           pagesToVisit.push(baseUrl + $(this).attr('href'));
//       });
//   }




