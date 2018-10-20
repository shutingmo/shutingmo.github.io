var getImageUrls = require('get-image-urls');

getImageUrls('https://www.billboard.com/')
.then(function(images) {
  console.log('Images found', images.length);
  console.log(images);
})
.catch(function(e) {
  console.log('ERROR', e);
})
