var Scraper = require("image-scraper");

var scraper = new Scraper("https://apod.nasa.gov/apod/astropix.html");

scraper.address = "https://www.microsoft.com/en-us/";

scraper.scrape(function(image){
  console.log(image.address);
})


/*
//Iterates through images found from Scraper.Scrape()
scraper.on("image", function(image){
    //Returns Attributes of Image
    //console.log(image.attribute);
    //Returns web address where image was found
    console.log(image.fromAddress)

    //Locates URL that Contains Image
    //console.log(image.address;)
});
*/
