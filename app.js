var express = require('express')
var app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, '')));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname+'index.html'));
});

var port = process.env.PORT || 3000; 

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})