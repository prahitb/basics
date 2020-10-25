var redis = require("redis");
var express = require("express");
var app = express();
var client = redis.createClient();

app.get("/", function( req, res) {
	res.write("Welcome.Go to /books for the books,/authors for the authors and so on.", function() {
		res.end();
	});
});

app.get("/books", function( req, res) {
	client.keys("books_table:*", function( err, books) {
		data = "";
		books.forEach( book => {
			data = data + book + "\n";
		});
		res.end(data);
	});
});

app.get("/authors", function( req, res ) {
	client.keys("books_table:*", function(err, books) {
		numBooks = books.length;
		var data = "";
		var numResponses = 0;
		console.log("numBooks:", numBooks);
		for ( var i = 0; i < numBooks; i++ ) {
			client.hgetall(books[i], function( err, bookData ) {
				numResponses++;
				data = data + bookData.author + "\n";
				if ( numResponses == numBooks ) {
					res.end(data);
				}
			});
		};
	});
});

app.listen(10000);
