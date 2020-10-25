

var http = require("http");

myServer = http.createServer( function( req, res) {
      res.write("Hello Guhan!!!!");
      res.end();

}).listen(3000);
