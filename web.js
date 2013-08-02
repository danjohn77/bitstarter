var express = require('express');
var app = express();
var buffer = new buffer(8);
app.use(express.logger());

var data = fs.readFileSync('/bitstarter/index.html')

b = buffer.toString(data)

app.get('/', function(request, response) {
  response.send(b);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
