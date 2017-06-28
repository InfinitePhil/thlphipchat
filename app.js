// Dependencies
var bodyParser = require('body-parser');
var express = require('express');

// Calling the Express module
var app = express();

var jsonParser = bodyParser.json({
	extended: false
})

// POST /login gets urlencoded bodies
app.post('/link', jsonParser, function (req, res) {

	// Gets the message value from the Hipchat JSON webhook
	var fullmessageText = req.body.item.message.message;
	var name = req.body.item.message.from.name;
	var messageText = fullmessageText.split('/link ')[1];
	var cleanText = messageText.split(' ')[0];
	var type = cleanText.charAt(0);

	var inc = "incident.do?sysparm_query=number=";
	var kb = "%2Fkb_view.do%3Fsysparm_article%3D";
	var con = "textsearch.do?sysparm_search=";

	var link;
	var firstname = name.split(' ')[0];



	switch (type) {
		case "I":
			var link = inc;
			res.json({
				message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cleanText}"> Here is ${cleanText}, ${firstname} :)</a>`,
				color: 'green'
			});
			break;

		case "K":

			var link = kb;
			res.json({
				message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cleanText}"> Here is ${cleanText}, ${firstname} :)</a>`,
				color: 'green'
			});
			break;
		case "C":
			var link = con;
			res.json({
				message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cleanText}"> Here is ${cleanText}, ${firstname} :)</a>`,
				color: 'green'
			});
			break;
		case "?":
			res.json({
				message: "Simply type /link followed by a full INC, KB, or CON number (including it's descriptor i.e. ‘INC’) and INCBot will return a link to the page. Note that the bot cannot check whether it is a valid number, only that it is formatted correctly. Put together by Phil, 2017. Version 2.1",
				color: 'yellow'
			});
			break;

		default:
			res.json({
				message: "Either that isn't an INC, KB, or CON - or Phil coded me wrong :(",
				color: 'red'
			});
			break;

	}


});

// Giving the app a port number to listen on - use 3000 by default 
var port = Number(process.env.PORT || 3000);

// Starts the app
app.listen(port);
