const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.post("/link", (req, res) => {
	var body = req.body.item.message.message
	var name = req.body.item.message.from.name

	var cut = body.slice(6)
	var type = cut.charAt(0)
	var inc = "incident.do?sysparm_query=number="
	var kb = "%2Fkb_view.do%3Fsysparm_article%3D"
	var con = "textsearch.do?sysparm_search=searchterm"
	var link = "phil"

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
		default:
			res.json({
		message: "Either that isn't an INC, KB, or CON - or Phil coded me wrong..."
	})
		
	}


	res.json({
		message: `<a href="https://umnprd.service-now.com/nav_to.do?uri=${link}${cut}"> Here is ${cut}, ${name} :)</a>`
	})
})

const port = Number(process.env.PORT || 7000)
if (!module.parent) {
	app.listen(port)
}

module.exports = app
