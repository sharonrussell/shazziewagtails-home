var express = require('express')
var app = express()

app.get('*', function(req, res) {
	res.send(`Go to my github! ${"http://www.github.com/sharonrussell"}`);
});

var port = process.env.PORT || 3000; 

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})