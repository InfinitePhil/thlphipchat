var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// create application/json parser 
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// POST /link gets urlencoded bodies 
app.post('/link', urlencodedParser, function (req, res) {
  var messageText = req.body.message.message
})
