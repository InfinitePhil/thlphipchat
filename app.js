// Dependencies
var bodyParser = require('body-parser');
var express = require('express');

// Calling the Express module
var app = express();

// Using the JSON function of the body-parser module
app.use(bodyParser.json()); 

// Route that Hipchat enters
app.post("/link", function(req, res) {

  // Gets the message value from the Hipchat JSON webhook
  var message = req.body.item.message.message.image;
  
  // Message posted back to Hipchat
  res.json({ image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/01/24/12/v2-cute-cat-picture.jpg"   });

});

// Giving the app a port number to listen on - use 3000 by default 
var port = Number(process.env.PORT || 3000);

// Starts the app
app.listen(port);
