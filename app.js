const bodyParser = require('body-parser')
const express    = require('express')


const app = express()
app.use(bodyParser.json()) 
app.use(express.static('public'))

app.post("/link", function(req, res) {

      var body = req.body.item.message.message
      var name = req.body.item.message.from.name
      
var cut = body.slice(6)
var sn = "https://umnprd.service-now.com/nav_to.do?uri=incident.do?sysparm_query=number="
var send = sn.concat(cut)


var link = "&lt;a href=&quot;" + send + "&quot;&gt;" + cut + "&lt;/a&gt;"
           
 
  res.json({ color: 'green', message: `<a href="google.com">000</a>`, notify: 'false'})
})

const port = Number(process.env.PORT || 7000)
if(!module.parent) { 
  app.listen(port)
}


module.exports = app
