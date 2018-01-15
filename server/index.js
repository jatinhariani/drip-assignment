var express = require('express')
var path = require('path')
var app = express()
var port = process.env.PORT || 8080

// Define the port to run on
app.set('port', port)

app.use(express.static(path.join(__dirname, '../dist')))

app.get('*', function (req, res) {
  res.sendfile(path.join(__dirname, '../dist/index.html')) // load the single view file (angular will handle the page changes on the front-end)
})

// Listen for requests
var server = app.listen(app.get('port'), function () {
  var port = server.address().port
  console.log('Magic happens on port ' + port)
})
