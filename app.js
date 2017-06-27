// Dependencies
var bodyParser = require('body-parser');
var express = require('express');

// Calling the Express module
var app = express();

var jsonParser = bodyParser.json({ extended: false })

// POST /login gets urlencoded bodies
app.post('/link', jsonParser, function (req, res) {

  // Gets the message value from the Hipchat JSON webhook
  var fullmessageText = req.body.item.message.message;
  var messageText = fullmessageText.split('/link ')[1];
  var cleanText = messageText.split(' ')[0];
  
  // Message posted back to Hipchat
  res.json({ message: `${cleanText}`,
				color: 'green'   });

});

// Giving the app a port number to listen on - use 3000 by default 
var port = Number(process.env.PORT || 3000);

// Starts the app
app.listen(port);
