const bodyParser = require('body-parser')
const express    = require('express')


const app = express()
app.use(bodyParser.json()) 
app.use(express.static('public'))

app.post("/link", (req, res) => {
  const message     = req.body.item.message.message
  const name        = req.body.item.message.from.name
 

  
  res.json({ color: 'green', message: `https://umnprd.service-now.com/nav_to.do?uri=incident.do?sysparm_query=number= ${message}`})
})

const port = Number(process.env.PORT || 7000)
if(!module.parent) { 
  app.listen(port)
}


module.exports = app
