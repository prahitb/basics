var redis = require("redis");
var client = redis.createClient();

client.keys("books_table:*", function( err, books) {
	books.forEach( book => {
		client.del(book, function(err) {
			if (err) {
				console.log("Could not delete" + book);
			}
		});
	});
});


setTimeout( function() { process.exit(0); }, 1000);
