
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '1fb691efd3a74e3cb297b8d3577a6d37'
});

// predict the contents of an image by passing in a url
app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", "http://img.timeinc.net/time/photoessays/2008/people_who_mattered/obama_main_1216.jpg").then(
  function(response) {
    console.log(JSON.stringify(response, null, 2));

  },
  function(err) {
    console.error(err);
  }
);