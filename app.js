const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/link', function(req, res) {
	var body = req.body.item.message.message;
	var name = req.body.item.message.from.name;


	var cut = body.substring(body.indexOf('link') + 1);
	var type = cut.charAt(0);
	var inc = "incident.do?sysparm_query=number=";
	var kb = "%2Fkb_view.do%3Fsysparm_article%3D";
	var con = "textsearch.do?sysparm_search=";
	var link = "initialize";
	var firstname = name.split(' ')[0];



	

	res.json({
		message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cut}"> Here is ${body}, ${firstname} :)</a>`,
		color: 'green'
	});
});

const port = Number(process.env.PORT || 7000)
if (!module.parent) {
	app.listen(port)
};

module.exports = app;
