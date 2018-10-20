
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '1fb691efd3a74e3cb297b8d3577a6d37'
});

var urls = ["https://samples.clarifai.com/demographics.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dwight_Howard_30483967610.jpg/1200px-Dwight_Howard_30483967610.jpg"];
var gender = [];
var race = [];
var age = [];
for(x in urls)
{
    app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", urls[x]).then(
      function(response) {
        for (i in response.outputs[0].data.regions) {
            x = response.outputs[0].data.regions[i].data.face.gender_appearance.concepts;
            if(x[0].value > x[1].value)
    	    {
		    
		    gender[i] = "Male";
    	    }
    	    else
    	    {
		    
	            gender[i] = "Female";
    	    }
            y = response.outputs[0].data.regions[i].data.face.multicultural_appearance.concepts[0].name;
	    race.push(y);
	    z = response.outputs[0].data.regions[i].data.face.age_appearance.concepts[0].name;
	    age.push(z);
        }
	for(j in gender)
	{
	    console.log(gender[j]);
	}
	for(k in race)
	{
	    console.log(race[k]);
	}
	for(l in age)
	{
	    console.log(age[l]);
	}
      },
      function(err) {
        console.error(err);
      }
    );
}








