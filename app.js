// Dependencies
var bodyParser = require('body-parser');
var express = require('express');

// Calling the Express module
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/link', urlencodedParser, function (req, res) {

  // Gets the message value from the Hipchat JSON webhook
  var messageText = req.body.item.message.message;
  
  // Message posted back to Hipchat
  res.json({ message: `${messageText}`,
				color: 'green'   });

});

// Giving the app a port number to listen on - use 3000 by default 
var port = Number(process.env.PORT || 3000);

// Starts the app
app.listen(port);
