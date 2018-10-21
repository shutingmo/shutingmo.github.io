

const Clarifai = require('clarifai');
const math = require('mathjs')

const app = new Clarifai.App({
 apiKey: '1fb691efd3a74e3cb297b8d3577a6d37'
});


var urls = ["http://static5.uk.businessinsider.com/image/58c29a46e21a9a28008b47b4-1190-625/the-9-youngest-self-made-female-billionaires-in-the-world.jpg", "https://samples.clarifai.com/demographics.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dwight_Howard_30483967610.jpg/1200px-Dwight_Howard_30483967610.jpg"];
var url = "https://samples.clarifai.com/demographics.jpg";


async function gender(urls)
{
    var gender = [];
    var male = 0;
    var female = 0;
    for(var w = 0; w < urls.length;  w ++)
    {
        const response = await app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", urls[w]);

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

      var malePercent = (male * 100) / (male + female + w - w);
      console.log("Male: " + malePercent + "%");
      var femalePercent = (female * 100) / (male + female);
      console.log("Female: " + femalePercent + "%");
      var diff = Math.abs(malePercent - femalePercent);
	    var genderScore = (1 - (diff / 100)) * 100;
	    console.log("Gender Score: " + genderScore);
}



async function race(urls)
{
    var white = 0;
    var black = 0;
    var hispanic = 0;
    var asian = 0;
    var PI = 0;
    var ME = 0;
    var AI = 0;
    var race = [];
    for(var w = 0; w < urls.length;  w ++)
    {
        const response = await app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", urls[w]);
        for (i in response.outputs[0].data.regions)
        {
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
        }

    }

    var whitePercent = (white * 100) / (white + asian + black + hispanic + PI + AI + ME);
  	console.log("White: " + whitePercent + "%");
  	var blackPercent = (black * 100) / (white + asian + black + hispanic + PI + AI + ME);
  	console.log("Black: " + blackPercent + "%");
  	var asianPercent = (asian * 100) / (white + asian + black + hispanic + PI + AI + ME);
  	console.log("Asian: " + asianPercent + "%");
  	var hispanicPercent = (hispanic * 100) / (white + asian + black + hispanic + PI + AI + ME);
  	console.log("Hispanic: " + hispanicPercent + "%");
  	var AIPercent = (AI * 100) / (white + asian + black + hispanic + PI + AI + ME);
  	console.log("American Indian: " + AIPercent + "%");
  	var PIPercent = (PI * 100) / (white + asian + black + hispanic + PI + AI + ME);
  	console.log("Pacific Islander: " + PIPercent + "%");
  	var MEPercent =  (ME * 100) / (white + asian + black + hispanic + PI + AI + ME);
  	console.log("Middle Eastern: " + MEPercent + "%");
  	var std = math.std(whitePercent, blackPercent, asianPercent, hispanicPercent, AIPercent, PIPercent, MEPercent);
  	var raceScore = ((37.8 - std) / 34.3604) * 100;
  	if(raceScore > 100)
  	{
  		raceScore = 100;
  	}
    raceScore = math.floor((raceScore * 100) / 100);
  	console.log("Race Score: " + raceScore);
}

async function age(urls)
{
    var age = [];
    var U21 = 0;
    var U34 = 0;
    var U44 = 0;
    var U54 = 0;
    var U64 = 0;
    var old = 0;
    for(var w in urls)
    {
        const response = await app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", urls[w]);
        for (i in response.outputs[0].data.regions)
        {
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
    }
    var U21p = (U21 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
  	console.log("21 and Under: " + U21p + "%");
    var U34p = (U34 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
  	console.log("22 - 34: " + U34p + "%");
    var U44p = (U44 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
  	console.log("35 - 44: " + U44p + "%");
    var U54p = (U54 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
  	console.log("45 - 54: " + U54p + "%");
    var U64p = (U64 * 100) / (U21 + U34 + U44 + U54 + U64 + old);
  	console.log("55 - 64: " + U64p + "%");
    var oldp = (old * 100) / (U21 + U34 + U44 + U54 + U64 + old);
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

gender(urls)
race(urls)
age(urls)
