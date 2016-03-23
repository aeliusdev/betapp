var express = require("express");
var logger = require("morgan");
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(require("./controllers/index"));

var server = app.listen(3000, function () 
{
	console.log("Server running on port " + server.address().port);
});

app.use(logger('dev'));
