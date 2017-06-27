var express = require('express')
var bodyParser = require('body-parser')
  
// Create a new instance of express
var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.text({ extended: false })

//app port
app.set('port', process.env.PORT || 7000);

//POST /link
app.post('/link', urlencodedParser, function (req, res) {
 
	var data = req.body.item.message.message;
	var name = req.body.item.message.from.name;
	var cut = body.substring(body.indexOf('link') + 1);
	var type = cut.charAt(0);
	var inc = "incident.do?sysparm_query=number=";
	var kb = "%2Fkb_view.do%3Fsysparm_article%3D";
	var con = "textsearch.do?sysparm_search=";
	var link = "initialize";
	var firstname = name.split(' ')[0];

res.json({
		message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cut}"> Here is ${data}, ${firstname} :)</a>`,
		color: 'green'
	});
    
  
});  


// Tell our app to listen on port 
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
