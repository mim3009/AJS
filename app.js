var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.send('type filename after /');
});

app.listen(3001, function () {
	console.log("Server is running on port 3001");
});