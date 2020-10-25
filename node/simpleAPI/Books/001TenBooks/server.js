var http = require("http");
var redis = require("redis");
var client=redis.createClient();

myServer = http.createServer( function( req, res) {
	console.log(req.url);
	if ( req.url != "/") {
		res.end(); 
	} else {
	client.keys("*", function( err, books) {
		//res.setHeader('Content-Type', 'application/json');
		numBooks = books.length;
		console.log("Number of Books:" + numBooks);
		for ( var i=0; i<numBooks; i++ ) {
			book = books[i];
			console.log(book);
			client.hgetall(book, function(err, bookData) {
				//console.log(bookData);
				console.log(bookData.author);

				writeData = book + "\t" +
							bookData.author + "\t" +
							bookData.title + "\t" + 
							bookData.edition + "\t" +
							bookData.publisher + "\n";

				
				res.write(writeData, function () {
					if ( i == numBooks) {
						res.end();
					}
				});
			});
		}
	});
	}
}).listen(10000);
