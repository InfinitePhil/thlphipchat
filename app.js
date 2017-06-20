const bodyParser = require('body-parser')
const express    = require('express')


const app = express()
app.use(bodyParser.json()) 
app.use(express.static('public'))

app.post("/link", function(req, res) {

      var body = req.body.item.message.message
      var name = req.body.item.message.from.name
                 
var cut = body.slice(6)
var type = cut.charAt(0);
var inc = "https://umnprd.service-now.com/nav_to.do?uri=incident.do?sysparm_query=number="
var kb = "https://umnprd.service-now.com/nav_to.do?uri=%2Fkb_view.do%3Fsysparm_article%3D"
var con = "https://umnprd.service-now.com/nav_to.do?uri=textsearch.do?sysparm_search=searchterm"
var link = "phil"


switch(type) {
        case "inc":
            var link = inc
            break;
        case "kb":
            var link = kb
            break;
        case "con":
            var link = con
            break;
        default:
        text = "Either that isn't an INC, KB, or CON - or Phil coded me wrong...";
           }
            
var send = link.concat(cut)           
 
  res.json({ color: 'green', message: `<a href="${send}${cut}"> Here is ${cut}, ${name} :)</a>`, notify: 'false'})

const port = Number(process.env.PORT || 7000)
if(!module.parent) { 
  app.listen(port)
}


module.exports = app
