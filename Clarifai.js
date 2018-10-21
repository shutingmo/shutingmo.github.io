const express = require('express');
const app = express();
var path = require('path');
const bodyParser = require('body-parser');
var Scraper = require("image-scraper");

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var getImageUrls = require('get-image-urls');

const Clarifai = require('clarifai');
const math = require('mathjs')

const appp = new Clarifai.App({
 apiKey: '1fb691efd3a74e3cb297b8d3577a6d37'
});

var START_URL = "https://www.gatech.edu/prospective-students";
var SEARCH_WORD = "stemming";
var MAX_PAGES_TO_VISIT = 5;
var pagesVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];
var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;
var pagesToPass = [];


var urls = ["https://www.gatech.edu/sites/default/files/images/headings/georgia-tech-prospective-students-.jpg",
"https://www.gatech.edu/sites/default/files/uploads/images/superblock_images/learning-block.jpg"
, "https://www.gatech.edu/sites/default/files/uploads/images/superblock_images/students-dining.png",
"https://www.gatech.edu/sites/default/files/uploads/images/superblock_images/student_support_system_sm.png",
"https://www.gatech.edu/sites/default/files/uploads/images/superblock_images/student_research_and_entrepreneurship_sm.png"];

var urls2 = ["https://admissions.ufl.edu/img/recruitment-2018/GIB.jpg",
"http://www.ufl.edu/media/wwwufledu/images/alumni/alumni_3.jpg",
"http://www.ufl.edu/media/wwwufledu/images/athletics/athletics_1_student_life.jpg",
"http://www.ufl.edu/media/wwwufledu/images/research/innovation_1.jpg",
"http://www.ufl.edu/media/wwwufledu/images/research/innovation_3.jpg"];

var urlloading = [];

async function analyze(urls)
{
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
    for(var w = 0; w < urls.length;  w ++)
    {
        try {
          const response = await appp.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", urls[w]);

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
              var z = response.outputs[0].data.regions[i].data.face.age_appearance.concepts[0].name;
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
        } catch(e) {
           console.log('ERROR', e);  // TypeError: failed to fetch
        }
      }
      if(male != 0 && female != 0)
      {
        var malePercent = (male * 100) / (male + female + w - w);
        malePercent = math.floor((malePercent * 100) / 100);
        console.log("Male: " + malePercent + "%");
        var femalePercent = (female * 100) / (male + female);
        femalePercent = math.floor((femalePercent * 100) / 100);
        console.log("Female: " + femalePercent + "%");
        var diff = Math.abs(malePercent - femalePercent);
        var genderScore = (1 - (diff / 100)) * 100;
        console.log("Gender Score: " + genderScore);
        var whitePercent = (white * 100) / (white + asian + black + hispanic + PI + AI + ME);
        whitePercent = math.floor((whitePercent * 100) / 100);
        console.log("White: " + whitePercent + "%");
        var blackPercent = (black * 100) / (white + asian + black + hispanic + PI + AI + ME);
        blackPercent = math.floor((blackPercent * 100) / 100);
        console.log("Black: " + blackPercent + "%");
        var asianPercent = (asian * 100) / (white + asian + black + hispanic + PI + AI + ME);
        asianPercent = math.floor((asianPercent * 100) / 100);
        console.log("Asian: " + asianPercent + "%");
        var hispanicPercent = (hispanic * 100) / (white + asian + black + hispanic + PI + AI + ME);
        hispanicPercent = math.floor((hispanicPercent * 100) / 100);
        console.log("Hispanic: " + hispanicPercent + "%");
        var AIPercent = (AI * 100) / (white + asian + black + hispanic + PI + AI + ME);
        AIPercent = math.floor((AIPercent * 100) / 100);
        console.log("American Indian: " + AIPercent + "%");
        var PIPercent = (PI * 100) / (white + asian + black + hispanic + PI + AI + ME);
        PIPercent = math.floor((PIPercent * 100) / 100);
        console.log("Pacific Islander: " + PIPercent + "%");
        var MEPercent =  (ME * 100) / (white + asian + black + hispanic + PI + AI + ME);
        MEPercent = math.floor((MEPercent * 100) / 100);
        console.log("Middle Eastern: " + MEPercent + "%");
        var std = math.std(whitePercent, blackPercent, asianPercent, hispanicPercent, AIPercent, PIPercent, MEPercent);
        var raceScore = ((37.8 - std) / 34.3604) * 100;
        if(raceScore > 100)
        {
          raceScore = 100;
        }
        raceScore = math.floor((raceScore * 100) / 100);
        console.log("Race Score: " + raceScore);
        var U21p = (U21 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
        U21p = math.floor((U21p * 100) / 100);
        var U34p = (U34 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
        U34p = math.floor((U34p * 100) / 100);
        var U44p = (U44 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
        U44p = math.floor((U44p * 100) / 100);
        var U54p = (U54 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
        U54p = math.floor((U54p * 100) / 100);
        var U64p = (U64 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
        U64p = math.floor((U64p * 100) / 100);
        var oldp = (old * 100) / (U21 + U34 + U44 + U54 + U64 + old);
        oldp = math.floor((oldp * 100) / 100);
        console.log("21 and Under: " + U21p + "%");
        console.log("22 - 34: " + U34p + "%");
        console.log("35 - 44: " + U44p + "%");
        console.log("45 - 54: " + U54p + "%");
        console.log("55 - 64: " + U64p + "%");
        console.log("65+ : " + oldp + "%");
        std = math.std(U21p, U34p, U44p, U54p, U64p, oldp);
        var ageScore = ((40.9 - std) / 34.3604) * 100;
        if(ageScore > 100)
        {
            ageScore = 100;
        }
        ageScore = math.floor((ageScore * 100) / 100);
        console.log("Age Score: " + ageScore);
      }
}
function loadURL(arrayPagesToPass)
{
    console.log("in loadURL pages passed in are " + JSON.stringify(arrayPagesToPass));

    var arrayPagesToPassLength = arrayPagesToPass.length;
    console.log("in load url, the array length is " + arrayPagesToPassLength);

    for(var i = 0; i < 2; i++)
    {
        console.log(arrayPagesToPass[i]);

        console.log("\nin loadURL the next page is " + arrayPagesToPass[i]);
        // var scraper = new Scraper(arrayPagesToPass[i]);

        getImageUrls(arrayPagesToPass[i])
        .then(function(images) {
        console.log('Images found', images.length);

        for(var index = 0; index < 5; index++)
        {
            console.log(images[index].url);
            urlloading.push(images[index].url);
        }

        console.log("\n urls array has " + JSON.stringify(urls));

        urls = ["http://static5.uk.businessinsider.com/image/58c29a46e21a9a28008b47b4-1190-625/the-9-youngest-self-made-female-billionaires-in-the-world.jpg", "https://samples.clarifai.com/demographics.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dwight_Howard_30483967610.jpg/1200px-Dwight_Howard_30483967610.jpg"];

        analyze(urlloading);

        })
        .catch(function(e) {
        console.log('ERROR', e);
        })





    }
};
loadURL(START_URL);
analyze(urls);
analyze(urls2);
