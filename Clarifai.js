
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '1fb691efd3a74e3cb297b8d3577a6d37'
});

// predict the contents of an image by passing in a url
app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", "https://samples.clarifai.com/demographics.jpg").then(
  function(response) {
    for (i in response.outputs[0].data.regions) {
        x = response.outputs[0].data.regions[i].data.face.gender_appearance.concepts;
        if(x[0].value > x[1].value)
    	{
         	console.log("Male");
    	}
    	else
    	{
         	console.log("Female");
    	}
    }
  },
  function(err) {
    console.error(err);
  }
);