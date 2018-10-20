
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '1fb691efd3a74e3cb297b8d3577a6d37'
});

// predict the contents of an image by passing in a url
app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dwight_Howard_30483967610.jpg/1200px-Dwight_Howard_30483967610.jpg").then(
  function(response) {
    var gender = [];
    var race = [];
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
        y = response.outputs[0].data.regions[i].data.face.multicultural_appearance.concepts;
	race.push(y[0].name);
    }
    for(j in gender)
    {
        console.log(JSON.stringify(gender[j]));
    }
    for(k in race)
    {
	console.log(JSON.stringify(race[k]));
    }
  },
  function(err) {
    console.error(err);
  }
);