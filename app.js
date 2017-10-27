// Dependencies
var bodyParser = require('body-parser');
var express = require('express');

// Calling the Express module
var app = express();

// create application/json parser
var jsonParser = bodyParser.json()

// POST /login gets JSON bodies
app.post('/link', jsonParser, function (req, res) {

	// Gets the full message value from the Hipchat JSON webhook inlcuding the /link
	var fullmessageText = req.body.item.message.message;

		// Removes the message text before and inluding the /link
		var messageText = fullmessageText.split('/link ')[1];

		// Removes the message text after the INC number
		var cleanText = messageText.split(' ')[0];

		// Gets first character of requested link to later determine what type it is - INC/KB etc.
		var type = cleanText.charAt(0);
	
	// Gets the full name of the message author from the Hipchat JSON webhook
	var fullName = req.body.item.message.from.name;

		// Removes the middle and last names from name
		var firstName = fullName.split(' ')[0];

	// Base URL's for each respective link. Var's to make it easy if they change
	var inc = "incident.do?sysparm_query=number=";
	var kb = "%2Fkb_view.do%3Fsysparm_article%3D";
	var con = "textsearch.do?sysparm_search=";

	//Switch based on type of link will send to the right res.json which will POST to Hipchat
	switch (type) {
		case "I":
			var link = inc;
			res.json({
				message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cleanText}"> Here is ${cleanText}, ${firstName}</a>`,
				color: 'green'
			
			});
			break;

		case "K":

			var link = kb;
			res.json({
				message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cleanText}"> Here is ${cleanText}, ${firstName}</a>`,
				color: 'green'
			
			});
			break;
		case "C":
			var link = con;
			res.json({
				message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cleanText}"> Here is ${cleanText}, ${firstName}</a>`,
				color: 'green'
				
			});
			break;
		case "?":
			res.json({
				message: "Simply type /link followed by a full INC, KB, or CON number (including it's descriptor i.e. ‘INC’) and INCBot will return a link to the page. Note that the bot cannot check whether it is a valid number, only that it is formatted correctly. Put together by Phil, 2017. Version 2.1",
				color: 'yellow',
				message_format: 'text'
			});
			
		case "P":
			var link = con;
			res.json({
				message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cleanText}"> Here is ${cleanText}, ${firstName}</a>`,
				color: 'green'
			});

		default:
			res.json({
				message: "Either that isn't an INC, KB, PRB, or a CON - or Phil coded me wrong :(",
				color: 'red',
				message_format: 'text'
			});
	}

});

// Giving the app a port number to listen on - use 3000 by default 
var port = Number(process.env.PORT || 3000);

// Starts the app
app.listen(port);
