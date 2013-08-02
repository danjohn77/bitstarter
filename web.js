var express = require('express');
var app = express();
var buffer = new buffer();
app.use(express.logger());

a = buffer.toString(fs.readFileSync('~/bitstarter/index.html'))

app.get('/', function(request, response) {
  response.send(a);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
