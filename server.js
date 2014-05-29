var express = require('express'),
	bodyParser = require('body-parser'),
  server = express(),
  port = process.env.PORT || 30000,
  staticRoot = __dirname;

server.use(bodyParser());
server.use('/', express.static(staticRoot));
server.listen(port);
console.log('http://localhost:'+port);

server.post('/workouts',function(q,r){
	var workout = q.body;
	r.send(workout);
});