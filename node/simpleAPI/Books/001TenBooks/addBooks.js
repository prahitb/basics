var redis = require("redis");
var client = redis.createClient();

client.hmset( "books_table:isbn:9781119962595",
				"author"	, "G Rauch",
				"title"		, "Smashing Node.js",
				"edition"	, "First",
				"publisher"	, "J Wiley & Sons",
				function (err) {
					console.log(err);
				});

client.hmset( "books_table:isbn:9781510421189",
				"author"	, "Ben Walsh",
				"title"		, "History Option B: The 20th century",
				"edition"	, "Second",
				"publisher"	, "Hodder Education",
				function (err) {
					console.log(err);
				});

client.hmset( "books_table:isbn:0340893168",
				"author"	, "Enid Blyton",
				"title"		, "Puzzle for the Secret Seven",
				"edition"	, "2004 edition",
				"publisher"	, "Hodder and Stoughton",
				function (err) {
					console.log(err);
				});

client.hmset( "books_table:isbn:9781617290572",
				"author"	, "Mike Cantelon",
				"title"		, "Node.js in action",
				"edition"	, "2014 edition",
				"publisher"	, "Manning Publications Co.",
				function (err) {
					console.log(err);
				});

client.hmset( "books_table:isbn:9780753555163"	,
				"author"	, "Greg McKeown",
				"title"		, "Essentialsm The Disciplined Pursuit of Less",
				"edition"	, "2014 edition",
				"publisher"	, "Crown Buissness",
				function (err) {
					console.log(err);
				});

setTimeout( function() { process.exit(0); }, 1000);