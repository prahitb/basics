var express = require("express");

var app = express();

app.get("/", function( req, res) {
	res.write("Hello all", function() {
		res.end();
	});
});

app.get("/guhan", function( req, res) {
	res.write("Hello Guhan", function() {
		res.end();
	});
})

app.get("/prahit", function( req, res) {
	res.write("Hello Prahit", function() {
		res.end();
	});
})

app.listen(10000);
