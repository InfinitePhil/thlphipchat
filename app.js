const
  bodyParser = require('body-parser'),
  express = require('express'),

// Create a new instance of express
 app = express();

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.raw({ extended: false }));

//app port
app.set('port', process.env.PORT || 7000);

//POST /obba
app.post('/link', function (req, res) {
 
	var data =  req.body.item.message.message;
	var name =  req.body.item.message.from.name;
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
