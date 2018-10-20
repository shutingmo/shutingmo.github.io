
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '1fb691efd3a74e3cb297b8d3577a6d37'
});

var urls = ["http://static5.uk.businessinsider.com/image/58c29a46e21a9a28008b47b4-1190-625/the-9-youngest-self-made-female-billionaires-in-the-world.jpg", "https://samples.clarifai.com/demographics.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dwight_Howard_30483967610.jpg/1200px-Dwight_Howard_30483967610.jpg"];
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
for(x in urls)
{
    app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", urls[x]).then(
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
	//gender
	var malePercent = (male * 100) / (male + female);
	console.log("Male: " + malePercent + "%");
	var femalePercent = (female * 100) / (male + female);
	console.log("Female: " + femalePercent + "%");
	//race
	console.log("White: " + (white * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
	console.log("Black: " + (black * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
	console.log("Asian: " + (asian * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
	console.log("Hispanic: " + (hispanic * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
	console.log("American Indian: " + (AI * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
	console.log("Pacific Islander: " + (PI * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
	console.log("Middle Eastern: " + (ME * 100) / (white + asian + black + hispanic + PI + AI + ME) + "%"); 
	//age
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





