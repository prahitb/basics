var http = require("http");
var redis = require("redis");
var client=redis.createClient();
var numResponses=0;
var writeData="";
myServer = http.createServer( function( req, res) {
	if ( req.url != "/") {
		res.end(); 
	} else {
	client.keys("*", function( err, books) {
		//res.setHeader('Content-Type', 'application/json');
		numBooks = books.length;
		console.log("Number of Books:" + numBooks);
		for ( var i=0; i<numBooks; i++ ) {
			book = books[i];
			client.hgetall(book, function(err, bookData) {
				writeData = writeData + book + "\t" +
							bookData.author + "\t" +
							bookData.title + "\t" + 
							bookData.edition + "\t" +
							bookData.publisher + "\n";
				numResponses=numResponses+1

					if ( numResponses == numBooks) {
						res.end(writeData);
					}
			});
		}
	});
	}
}).listen(10000);
