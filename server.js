var http = require("http"),
  express = require("express");

var app = express();
var server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

var port = 8000;
server.listen(port);
console.log("Server up and listening on port " + port);