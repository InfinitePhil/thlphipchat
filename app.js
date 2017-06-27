const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.post("/link", (req, res) => {
	var body = req.body.item.message.message
	var name = req.body.item.message.from.name


	var cut = body.substring(body.indexOf('link') + 1)
	var type = cut.charAt(0)
	var inc = "incident.do?sysparm_query=number="
	var kb = "%2Fkb_view.do%3Fsysparm_article%3D"
	var con = "textsearch.do?sysparm_search="
	var link = "initialize"
	var firstname = name.split(' ')[0]



	switch (type) {
		case "I":
			var link = inc
			break
		case "K":
			var link = kb
			break
		case "C":
			var link = con
			break
		case "?":
			res.json({
				message: "Simply type /link followed by a full INC, KB, or CON number (including it's descriptor i.e. ‘INC’) and INCBot will return a link to the page. Note that the bot cannot check whether it is a valid number, only that it is formatted correctly. Put together by Phil, 2017.",
				color: 'yellow'
			})

		default:
			res.json({
				message: "Either that isn't an INC, KB, or CON - or Phil coded me wrong... :(",
				color: 'red'
			})

	}


	res.json({
		message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cut}"> Here is ${cut}, ${firstname} :)</a>`,
		color: 'green'
	})
})

const port = Number(process.env.PORT || 7000)
if (!module.parent) {
	app.listen(port)
}

module.exports = app
